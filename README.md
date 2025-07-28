# 🧳 Trippcard_backend

An Express.js-based backend for TrippCard — a modern OTA (Online Travel Agency) platform that allows users to search and book flights and hotels using real-time data from the Amadeus API. Built with PostgreSQL, Sequelize, and Node.js.

---

## 🚀 Features

- **Live Search for Flights & Hotels** via Amadeus API
- **Filters** for location, date, and price
- **Booking Details Saved** to PostgreSQL database
- Organized folder structure using MVC architecture
- Built with Express, Sequelize, and PostgreSQL
- API tested using Postman
- Environment variables stored securely using `.env`

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL with Sequelize ORM
- **External API:** Amadeus API (for real-time flights & hotels)
- **Testing:** Postman
- **Version Control:** Git + GitHub

---

## 📌 Core Functionalities

### Flight Search
- Users can search for flights using:
  - **Origin**
  - **Destination**
  - **Departure Date**
  - **Number of Adults**
  - **Maximum Price**
- Real-time results are fetched from Amadeus API.


### Hotel Search
- Users can search for hotels using:
  - **Location (City Code)**
  - **Check-in Date**
  - **Check-out Date**
  - **Number of Adults**
  - **Maximum Price**
- Data is pulled live from Amadeus API and filtered as per input.

---

### 📝 Booking System
- Once a user selects a hotel or flight:
  - The booking details are stored in the PostgreSQL database.
  - Includes selected item info, timestamp, and optional user/session data.

>>>>>>> c9a8bbb697c998f94dfa1fa3d729ae494533d736
