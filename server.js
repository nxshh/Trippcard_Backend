import express from 'express';
import BookingRoutes from './routes/BookingRoutes.js';
import app from './app.js'; // Your pre-configured express app with middleware

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'; // Bind to all interfaces (localhost + LAN)

// Mount routes
app.use('/api/bookings', BookingRoutes);

// Start server
app.listen(PORT, HOST, () => {
  console.log(`🚀 Server is running:`);
  console.log(`📍 Local:   http://localhost:${PORT}`);
  console.log(`📡 Network: http://192.168.1.15:${PORT}`);
});
