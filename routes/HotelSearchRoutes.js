import express from 'express';
import { searchHotels } from '../controllers/HotelSearchController.js';
const router = express.Router();

router.get('/hotels/search', searchHotels);
export default router;
