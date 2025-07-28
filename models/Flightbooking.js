import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class FlightBooking extends Model {
    static associate(models) {
      // define associations here if needed
    }
  }

  FlightBooking.init({
    flightId: DataTypes.STRING,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    departureDate: DataTypes.DATE,
    arrivalDate: DataTypes.DATE,
    price: DataTypes.FLOAT,
    airline: DataTypes.STRING,
    user: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'FlightBooking',
  });

  return FlightBooking;
};
