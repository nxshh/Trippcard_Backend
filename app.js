import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import HotelBookingRoutes from './routes/HotelBookingRoutes.js';
import FlightBookingRoutes from './routes/FlightBookingRoutes.js';
import FlightSearchRoutes from './routes/FlightSearchRoutes.js';
import HotelSearchRoutes from './routes/HotelSearchRoutes.js';
import BookingRoutes from './routes/BookingRoutes.js';
import AviationstackRoutes from './routes/AviationstackRoutes.js';

dotenv.config();

const app = express();
app.use(cors()); 
app.use(express.json());

// Root route for testing
app.get('/', (req, res) => {
  res.json({ 
    message: 'Trippcard Backend API is running!',
    endpoints: {
      bookings: '/api/bookings',
      hotelBookings: '/api/hotel/bookings',
      flightBookings: '/api/flight/bookings',
      hotelSearch: '/api/hotel/search',
      flightSearch: '/api/flight/search',
      hotelsSearch: '/api/hotels/search',
      flightsSearch: '/api/flights/search',
      aviationstack: {
        realTimeFlights: '/api/aviationstack/flights',
        airports: '/api/aviationstack/airports',
        airlines: '/api/aviationstack/airlines',
        routes: '/api/aviationstack/routes',
        cities: '/api/aviationstack/cities',
        countries: '/api/aviationstack/countries'
      }
    }
  });
});

// Routes
app.use("/api", HotelBookingRoutes);
app.use("/api", FlightBookingRoutes);
app.use("/api", FlightSearchRoutes);
app.use("/api", HotelSearchRoutes);
app.use("/api", BookingRoutes);
app.use("/api/aviationstack", AviationstackRoutes);

export default app;
