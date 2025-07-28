import { HotelBooking, FlightBooking } from '../models/index.js';

// 🛫 Book a flight
export const bookFlight = async (req, res) => {
  try {
    const { userId, flightDetails } = req.body;
    const booking = await FlightBooking.create({
      userId,
      details: flightDetails,
    });

    res.status(201).json({
      message: 'Flight booked!',
      booking,
    });
  } catch (err) {
    res.status(500).json({
      error: 'Flight booking failed',
      details: err.message,
    });
  }
};

// 🏨 Book a hotel
export const bookHotel = async (req, res) => {
  try {
    const { userId, hotelDetails } = req.body;
    const booking = await HotelBooking.create({
      userId,
      details: hotelDetails,
    });

    res.status(201).json({
      message: 'Hotel booked!',
      booking,
    });
  } catch (err) {
    res.status(500).json({
      error: 'Hotel booking failed',
      details: err.message,
    });
  }
};

// 📋 Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const flights = await FlightBooking.findAll();
    const hotels = await HotelBooking.findAll();

    res.status(200).json({
      flights,
      hotels,
    });
  } catch (err) {
    res.status(500).json({
      error: 'Could not fetch bookings',
      details: err.message,
    });
  }
};
