import Amadeus from 'amadeus';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔍 Testing Amadeus API Configuration...');
console.log('=====================================');

// Check if credentials are loaded
console.log('📋 Environment Variables:');
console.log('AMADEUS_CLIENT_ID:', process.env.AMADEUS_CLIENT_ID ? '✅ Set' : '❌ Missing');
console.log('AMADEUS_CLIENT_SECRET:', process.env.AMADEUS_CLIENT_SECRET ? '✅ Set' : '❌ Missing');

if (!process.env.AMADEUS_CLIENT_ID || !process.env.AMADEUS_CLIENT_SECRET) {
  console.log('\n❌ ERROR: Missing Amadeus API credentials!');
  console.log('Please add these to your .env file:');
  console.log('AMADEUS_CLIENT_ID=your_test_client_id');
  console.log('AMADEUS_CLIENT_SECRET=your_test_client_secret');
  process.exit(1);
}

// Initialize Amadeus
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
  hostname: 'test.api.amadeus.com'
});

console.log('\n🔐 Testing Amadeus Authentication...');

// Test the API connection
try {
  // Try to get a simple endpoint to test authentication
  const response = await amadeus.referenceData.locations.get({
    keyword: 'PAR',
    subType: Amadeus.location.any
  });
  
  console.log('✅ SUCCESS: Amadeus API connection working!');
  console.log('📊 Response data:', response.data.length, 'locations found');
  
} catch (error) {
  console.log('❌ ERROR: Amadeus API connection failed!');
  console.log('Error code:', error.code);
  console.log('Error message:', error.message);
  
  if (error.code === 'INVALID_CLIENT') {
    console.log('\n💡 SOLUTION: Your API credentials are invalid.');
    console.log('Please check your CLIENT_ID and CLIENT_SECRET from:');
    console.log('https://developers.amadeus.com/');
  } else if (error.code === 'NetworkError') {
    console.log('\n💡 SOLUTION: Network connection issue.');
    console.log('Please check your internet connection.');
  }
} 