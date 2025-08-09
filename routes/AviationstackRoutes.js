import express from 'express';
import {
  getRealTimeFlights,
  getAirports,
  getAirlines,
  getRoutes,
  getCities,
  getCountries
} from '../controllers/AviationstackController.js';

const router = express.Router();

// Real-time flights endpoint
router.get('/flights', getRealTimeFlights);

// Airports endpoint
router.get('/airports', getAirports);

// Airlines endpoint
router.get('/airlines', getAirlines);

// Routes endpoint
router.get('/routes', getRoutes);

// Cities endpoint
router.get('/cities', getCities);

// Countries endpoint
router.get('/countries', getCountries);

export default router; 