# Aviationstack API Integration

This document describes the Aviationstack API integration added to the Trippcard backend.

## Overview

Aviationstack API provides real-time flight data, airport information, airline details, and more. This integration complements the existing Amadeus API by providing additional aviation data sources.

## Environment Variables

Add the following to your `.env` file:

```env
# Aviationstack API Configuration
AVIATIONSTACK_ACCESS_KEY=your_aviationstack_access_key
AVIATIONSTACK_USE_HTTPS=true
```

## API Endpoints

### Real-time Flights
- **GET** `/api/aviationstack/flights`
- **Description**: Get real-time flight information
- **Query Parameters**:
  - `limit` (optional): Number of results (max 100)
  - `offset` (optional): Pagination offset
  - `flight_status` (optional): Filter by status (scheduled, active, landed, cancelled, incident, diverted)
  - `flight_date` (optional): Filter by date (YYYY-MM-DD)
  - `dep_iata` (optional): Departure airport IATA code
  - `arr_iata` (optional): Arrival airport IATA code
  - `airline_iata` (optional): Airline IATA code
  - `flight_number` (optional): Flight number
  - `lang` (optional): Language code for translations

### Airports
- **GET** `/api/aviationstack/airports`
- **Description**: Get airport information
- **Query Parameters**:
  - `limit` (optional): Number of results
  - `offset` (optional): Pagination offset
  - `search` (optional): Search term
  - `country_code` (optional): Filter by country code
  - `lang` (optional): Language code

### Airlines
- **GET** `/api/aviationstack/airlines`
- **Description**: Get airline information
- **Query Parameters**:
  - `limit` (optional): Number of results
  - `offset` (optional): Pagination offset
  - `search` (optional): Search term
  - `country_code` (optional): Filter by country code
  - `lang` (optional): Language code

### Routes
- **GET** `/api/aviationstack/routes`
- **Description**: Get airline routes
- **Query Parameters**:
  - `limit` (optional): Number of results
  - `offset` (optional): Pagination offset
  - `airline_iata` (optional): Airline IATA code
  - `dep_iata` (optional): Departure airport IATA code
  - `arr_iata` (optional): Arrival airport IATA code
  - `lang` (optional): Language code

### Cities
- **GET** `/api/aviationstack/cities`
- **Description**: Get city information
- **Query Parameters**:
  - `limit` (optional): Number of results
  - `offset` (optional): Pagination offset
  - `search` (optional): Search term
  - `country_code` (optional): Filter by country code
  - `lang` (optional): Language code

### Countries
- **GET** `/api/aviationstack/countries`
- **Description**: Get country information
- **Query Parameters**:
  - `limit` (optional): Number of results
  - `offset` (optional): Pagination offset
  - `search` (optional): Search term
  - `lang` (optional): Language code

## Usage Examples

### Get Real-time Flights
```bash
curl "http://localhost:5000/api/aviationstack/flights?dep_iata=JFK&arr_iata=LAX&flight_status=active"
```

### Search Airports
```bash
curl "http://localhost:5000/api/aviationstack/airports?search=New York&country_code=US"
```

### Get Airlines
```bash
curl "http://localhost:5000/api/aviationstack/airlines?search=American&country_code=US"
```

## Error Handling

The API returns standard HTTP status codes:
- `200`: Success
- `400`: Bad Request (validation errors)
- `401`: Unauthorized (invalid API key)
- `403`: Forbidden (plan restrictions)
- `404`: Not Found
- `429`: Rate Limit Exceeded
- `500`: Internal Server Error

## Features

1. **Real-time Flight Tracking**: Get live flight status and information
2. **Airport Database**: Comprehensive airport information with IATA/ICAO codes
3. **Airline Information**: Detailed airline data and routes
4. **Multi-language Support**: Available in 50+ languages
5. **HTTPS Support**: Secure connections available on all plans
6. **Pagination**: Built-in pagination support for large datasets

## Integration with Existing Features

This Aviationstack integration complements your existing Amadeus API by providing:
- Real-time flight status (vs. booking-focused Amadeus)
- Airport and airline reference data
- Historical flight information
- Enhanced search capabilities

## Getting Started

1. Sign up for a free Aviationstack API key at [aviationstack.com](https://aviationstack.com)
2. Add your API key to the `.env` file
3. Restart your server
4. Test the endpoints using the examples above

## Rate Limits

- Free plan: 500 requests/month
- Basic plan: 10,000 requests/month
- Professional plan: 50,000 requests/month
- Business plan: 250,000 requests/month

Monitor your usage through the Aviationstack dashboard to avoid rate limiting. 