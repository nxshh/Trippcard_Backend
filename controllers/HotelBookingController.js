import { HotelBooking } from '../models/index.js';

export const bookHotel = async (req, res) => {
  try {
    const booking = await HotelBooking.create(req.body);
    res.status(201).json({ message: 'Hotel booked successfully', booking });
  } catch (error) {
    console.error('Hotel booking error:', error);
    res.status(500).json({ error: 'Failed to book hotel' });
  }
};
