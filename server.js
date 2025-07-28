// server.js
import express from 'express';
import BookingRoutes from './routes/BookingRoutes.js';
import app from './app.js'; // Your pre-configured express app with middleware

const PORT = process.env.PORT || 5000;

// Mount routes
app.use('/api/bookings', BookingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
