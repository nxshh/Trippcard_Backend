import { FlightBooking } from '../models/index.js';

export const bookFlight = async (req, res) => {
  try {
    const booking = await FlightBooking.create(req.body);
    res.status(201).json({ message: 'Flight booked successfully', booking });
  } catch (error) {
    console.error('Flight booking error:', error);
    res.status(500).json({ error: 'Failed to book flight' });
  }
};
