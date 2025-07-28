import amadeus from '../config/amadeus.js';

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

    const params = {
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: date,
      adults,
      ...(price && { maxPrice: price })
    };

    const response = await amadeus.shopping.flightOffersSearch.get({ params });
    res.json(response.data);
  } catch (error) {
    console.error('Flight search error:', error);
    res.status(500).json({ error: 'Flight search failed' });
  }
};
