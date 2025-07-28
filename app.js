import express from 'express';
import dotenv from 'dotenv';
import HotelBookingRoutes from './routes/HotelBookingRoutes.js';
import FlightBookingRoutes from './routes/FlightBookingRoutes.js';
import FlightSearchRoutes from './routes/FlightSearchRoutes.js';
import HotelSearchRoutes from './routes/HotelSearchRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/api", HotelBookingRoutes);
app.use("/api", FlightBookingRoutes);
app.use("/api", FlightSearchRoutes);
app.use("/api", HotelSearchRoutes);

export default app;
