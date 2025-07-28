import amadeus from '../config/amadeus.js';

export const searchHotels = async (req, res) => {
  try {
    const {
      location,
      checkin,
      checkout,
      adults,
      price
    } = req.query;

    if (!location || !checkin || !checkout || !adults) {
      return res.status(400).json({ error: 'Missing required hotel search fields.' });
    }

    const params = {
      cityCode: location,
      checkInDate: checkin,
      checkOutDate: checkout,
      adults,
      ...(price && { priceRange: `0-${price}` })
    };

    const response = await amadeus.shopping.hotelOffers.get({ params });
    res.json(response.data);
  } catch (error) {
    console.error('Hotel search error:', error);
    res.status(500).json({ error: 'Hotel search failed' });
  }
};
