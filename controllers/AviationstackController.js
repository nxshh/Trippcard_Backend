import aviationstackAPI from '../config/aviationstack.js';

// Real-time flights endpoint
export const getRealTimeFlights = async (req, res) => {
  try {
    const {
      limit = 100,
      offset = 0,
      flight_status,
      flight_date,
      dep_iata,
      arr_iata,
      dep_icao,
      arr_icao,
      airline_name,
      airline_iata,
      airline_icao,
      flight_number,
      flight_iata,
      lang
    } = req.query;

    if (!process.env.AVIATIONSTACK_ACCESS_KEY) {
      return res.status(500).json({ 
        error: 'Aviationstack API key not configured. Please check your .env file.' 
      });
    }

    const params = {
      limit,
      offset,
      ...(flight_status && { flight_status }),
      ...(flight_date && { flight_date }),
      ...(dep_iata && { dep_iata }),
      ...(arr_iata && { arr_iata }),
      ...(dep_icao && { dep_icao }),
      ...(arr_icao && { arr_icao }),
      ...(airline_name && { airline_name }),
      ...(airline_iata && { airline_iata }),
      ...(airline_icao && { airline_icao }),
      ...(flight_number && { flight_number }),
      ...(flight_iata && { flight_iata }),
      ...(lang && { lang })
    };

    console.log('Fetching real-time flights with params:', params);
    
    const response = await aviationstackAPI.get('/flights', { params });
    res.json(response.data);
  } catch (error) {
    console.error('Real-time flights error:', error);
    if (error.response) {
      return res.status(error.response.status || 500).json({
        error: error.response.data || 'Failed to fetch real-time flights',
        details: error.message
      });
    }
    res.status(500).json({ 
      error: 'Failed to fetch real-time flights',
      details: error.message 
    });
  }
};

// Airports endpoint
export const getAirports = async (req, res) => {
  try {
    const {
      limit = 100,
      offset = 0,
      search,
      country_code,
      lang
    } = req.query;

    if (!process.env.AVIATIONSTACK_ACCESS_KEY) {
      return res.status(500).json({ 
        error: 'Aviationstack API key not configured. Please check your .env file.' 
      });
    }

    const params = {
      limit,
      offset,
      ...(search && { search }),
      ...(country_code && { country_code }),
      ...(lang && { lang })
    };

    console.log('Fetching airports with params:', params);
    
    const response = await aviationstackAPI.get('/airports', { params });
    res.json(response.data);
  } catch (error) {
    console.error('Airports error:', error);
    if (error.response) {
      return res.status(error.response.status || 500).json({
        error: error.response.data || 'Failed to fetch airports',
        details: error.message
      });
    }
    res.status(500).json({ 
      error: 'Failed to fetch airports',
      details: error.message 
    });
  }
};

// Airlines endpoint
export const getAirlines = async (req, res) => {
  try {
    const {
      limit = 100,
      offset = 0,
      search,
      country_code,
      lang
    } = req.query;

    if (!process.env.AVIATIONSTACK_ACCESS_KEY) {
      return res.status(500).json({ 
        error: 'Aviationstack API key not configured. Please check your .env file.' 
      });
    }

    const params = {
      limit,
      offset,
      ...(search && { search }),
      ...(country_code && { country_code }),
      ...(lang && { lang })
    };

    console.log('Fetching airlines with params:', params);
    
    const response = await aviationstackAPI.get('/airlines', { params });
    res.json(response.data);
  } catch (error) {
    console.error('Airlines error:', error);
    if (error.response) {
      return res.status(error.response.status || 500).json({
        error: error.response.data || 'Failed to fetch airlines',
        details: error.message
      });
    }
    res.status(500).json({ 
      error: 'Failed to fetch airlines',
      details: error.message 
    });
  }
};

// Routes endpoint
export const getRoutes = async (req, res) => {
  try {
    const {
      limit = 100,
      offset = 0,
      airline_iata,
      airline_icao,
      dep_iata,
      arr_iata,
      dep_icao,
      arr_icao,
      lang
    } = req.query;

    if (!process.env.AVIATIONSTACK_ACCESS_KEY) {
      return res.status(500).json({ 
        error: 'Aviationstack API key not configured. Please check your .env file.' 
      });
    }

    const params = {
      limit,
      offset,
      ...(airline_iata && { airline_iata }),
      ...(airline_icao && { airline_icao }),
      ...(dep_iata && { dep_iata }),
      ...(arr_iata && { arr_iata }),
      ...(dep_icao && { dep_icao }),
      ...(arr_icao && { arr_icao }),
      ...(lang && { lang })
    };

    console.log('Fetching routes with params:', params);
    
    const response = await aviationstackAPI.get('/routes', { params });
    res.json(response.data);
  } catch (error) {
    console.error('Routes error:', error);
    if (error.response) {
      return res.status(error.response.status || 500).json({
        error: error.response.data || 'Failed to fetch routes',
        details: error.message
      });
    }
    res.status(500).json({ 
      error: 'Failed to fetch routes',
      details: error.message 
    });
  }
};

// Cities endpoint
export const getCities = async (req, res) => {
  try {
    const {
      limit = 100,
      offset = 0,
      search,
      country_code,
      lang
    } = req.query;

    if (!process.env.AVIATIONSTACK_ACCESS_KEY) {
      return res.status(500).json({ 
        error: 'Aviationstack API key not configured. Please check your .env file.' 
      });
    }

    const params = {
      limit,
      offset,
      ...(search && { search }),
      ...(country_code && { country_code }),
      ...(lang && { lang })
    };

    console.log('Fetching cities with params:', params);
    
    const response = await aviationstackAPI.get('/cities', { params });
    res.json(response.data);
  } catch (error) {
    console.error('Cities error:', error);
    if (error.response) {
      return res.status(error.response.status || 500).json({
        error: error.response.data || 'Failed to fetch cities',
        details: error.message
      });
    }
    res.status(500).json({ 
      error: 'Failed to fetch cities',
      details: error.message 
    });
  }
};

// Countries endpoint
export const getCountries = async (req, res) => {
  try {
    const {
      limit = 100,
      offset = 0,
      search,
      lang
    } = req.query;

    if (!process.env.AVIATIONSTACK_ACCESS_KEY) {
      return res.status(500).json({ 
        error: 'Aviationstack API key not configured. Please check your .env file.' 
      });
    }

    const params = {
      limit,
      offset,
      ...(search && { search }),
      ...(lang && { lang })
    };

    console.log('Fetching countries with params:', params);
    
    const response = await aviationstackAPI.get('/countries', { params });
    res.json(response.data);
  } catch (error) {
    console.error('Countries error:', error);
    if (error.response) {
      return res.status(error.response.status || 500).json({
        error: error.response.data || 'Failed to fetch countries',
        details: error.message
      });
    }
    res.status(500).json({ 
      error: 'Failed to fetch countries',
      details: error.message 
    });
  }
}; 