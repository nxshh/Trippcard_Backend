import express from 'express';
import { bookFlight } from '../controllers/FlightBookingController.js';

const router = express.Router();

router.post('/book/flight', bookFlight);

export default router;
