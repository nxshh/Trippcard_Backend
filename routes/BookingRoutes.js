import express from 'express';
import {
  bookFlight,
  bookHotel,
  getAllBookings
} from '../controllers/BookingController.js';

const router = express.Router();

// Route to book a flight
router.post('/book/flight', bookFlight);

// Route to book a hotel
router.post('/book/hotel', bookHotel);

// Route to get all bookings (optional/debugging/testing)
router.get('/bookings', getAllBookings);

export default router;
