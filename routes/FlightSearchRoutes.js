import express from 'express';
import { searchFlights } from '../controllers/FlightSearchController.js';
const router = express.Router();

router.get('/flights/search', searchFlights);
export default router;
