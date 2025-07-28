import express from 'express';
import { bookHotel } from '../controllers/HotelBookingController.js';

const router = express.Router();

router.post('/book/hotel', bookHotel);

export default router;
