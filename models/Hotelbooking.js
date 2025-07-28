import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class HotelBooking extends Model {
    static associate(models) {
      // define association here
    }
  }

  HotelBooking.init({
    hotelId: DataTypes.STRING,
    hotelName: DataTypes.STRING,
    location: DataTypes.STRING,
    checkInDate: DataTypes.DATE,
    checkOutDate: DataTypes.DATE,
    price: DataTypes.FLOAT,
    user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HotelBooking',
  });

  return HotelBooking;
};
