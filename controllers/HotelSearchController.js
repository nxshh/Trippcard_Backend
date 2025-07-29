import axios from 'axios';

export const searchHotels = async (req, res) => {
  try {
    const {
      location,
      checkin,
      checkout,
      adults,
      price
    } = req.body;

    // Validate required fields
    if (!location || !checkin || !checkout || !adults) {
      return res.status(400).json({ error: 'Missing required hotel search fields: location, checkin, checkout, or adults.' });
    }

    // Check Amadeus credentials
    if (!process.env.AMADEUS_CLIENT_ID || !process.env.AMADEUS_CLIENT_SECRET) {
      return res.status(500).json({ 
        error: 'Amadeus API credentials not configured. Please check your .env file.' 
      });
    }

    // 1. Get Amadeus access token
    const tokenRes = await axios.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      `grant_type=client_credentials&client_id=${process.env.AMADEUS_CLIENT_ID}&client_secret=${process.env.AMADEUS_CLIENT_SECRET}`,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    const accessToken = tokenRes.data.access_token;

    // 2. Prepare Amadeus search params
    const params = {
      cityCode: location,
      checkInDate: checkin,
      checkOutDate: checkout,
      adults: parseInt(adults),
      ...(price && !isNaN(price) ? { priceRange: `0-${price}` } : {})
    };

    console.log('🔍 Searching hotels with params:', params);

    // 3. Send search request
    const response = await axios.get(
      'https://test.api.amadeus.com/v2/shopping/hotel-offers',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params
      }
    );

    // 4. Respond with hotel data
    res.json(response.data);

  } catch (error) {
    console.error('Hotel search error:', error);
    if (error.response) {
      return res.status(error.response.status || 500).json({
        error: error.response.data || 'Hotel search failed',
        details: error.message
      });
    }
    res.status(500).json({
      error: 'Hotel search failed',
      details: error.message
    });
  }
};
