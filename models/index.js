import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configFile from '../config/config.js';
import { fileURLToPath } from 'url';

import FlightBookingFactory from './FlightBooking.js';
import HotelBookingFactory from './HotelBooking.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const db = {};

// Initialize models
const HotelBooking = HotelBookingFactory(sequelize, Sequelize.DataTypes);
const FlightBooking = FlightBookingFactory(sequelize, Sequelize.DataTypes);

// Add to db object
db.HotelBooking = HotelBooking;
db.FlightBooking = FlightBooking;

// Run associations if they exist
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

// Sequelize core
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export default for full access: db.HotelBooking etc.
export default db;

// Also export named shortcuts
export { HotelBooking, FlightBooking };
