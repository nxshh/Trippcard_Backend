import axios from 'axios';

export const searchFlights = async (req, res) => {
  try {
    const {
      origin,
      destination,
      date,
      adults,
      price
    } = req.query;

    if (!origin || !destination || !date || !adults) {
      return res.status(400).json({ error: 'Missing required flight search fields.' });
    }

    if (!process.env.AMADEUS_CLIENT_ID || !process.env.AMADEUS_CLIENT_SECRET) {
      return res.status(500).json({ 
        error: 'Amadeus API credentials not configured. Please check your .env file.' 
      });
    }

    // 1. Get access token
    const tokenRes = await axios.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      `grant_type=client_credentials&client_id=${process.env.AMADEUS_CLIENT_ID}&client_secret=${process.env.AMADEUS_CLIENT_SECRET}`,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    const accessToken = tokenRes.data.access_token;

    // 2. Search flights
    const params = {
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: date,
      adults,
      ...(price && { maxPrice: price })
    };

    console.log('Searching flights with params:', params);
    
    const response = await axios.get(
      'https://test.api.amadeus.com/v2/shopping/flight-offers',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Flight search error:', error);
    if (error.response) {
      return res.status(error.response.status || 500).json({
        error: error.response.data || 'Flight search failed',
        details: error.message
      });
    }
    res.status(500).json({ 
      error: 'Flight search failed',
      details: error.message 
    });
  }
};
