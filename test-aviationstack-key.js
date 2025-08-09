import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const testAviationstackKey = async () => {
  console.log('🔍 Testing Aviationstack API Configuration...\n');
  
  // Check if API key is set
  const apiKey = process.env.AVIATIONSTACK_ACCESS_KEY;
  if (!apiKey) {
    console.error('❌ AVIATIONSTACK_ACCESS_KEY is not set in your .env file');
    console.log('\n📝 Add this to your .env file:');
    console.log('AVIATIONSTACK_ACCESS_KEY=your_api_key_here');
    console.log('AVIATIONSTACK_USE_HTTPS=true');
    return;
  }
  
  console.log('✅ AVIATIONSTACK_ACCESS_KEY is configured');
  console.log(`🔑 API Key: ${apiKey.substring(0, 8)}...${apiKey.substring(apiKey.length - 4)}`);
  console.log(`🌐 HTTPS Enabled: ${process.env.AVIATIONSTACK_USE_HTTPS === 'true'}`);
  
  // Test a simple API call
  try {
    console.log('\n🧪 Testing API connection...');
    
    const baseURL = process.env.AVIATIONSTACK_USE_HTTPS === 'true' 
      ? 'https://api.aviationstack.com/v1'
      : 'http://api.aviationstack.com/v1';
    
    const response = await axios.get(`${baseURL}/countries`, {
      params: {
        access_key: apiKey,
        limit: 1
      },
      timeout: 10000
    });
    
    console.log('✅ API connection successful!');
    console.log('📊 Response status:', response.status);
    console.log('📄 Response data:', JSON.stringify(response.data, null, 2));
    
  } catch (error) {
    console.error('❌ API connection failed!');
    console.error('🔍 Error details:');
    
    if (error.response) {
      console.error('📡 Status:', error.response.status);
      console.error('📄 Response:', JSON.stringify(error.response.data, null, 2));
      
      if (error.response.status === 401) {
        console.log('\n💡 This usually means:');
        console.log('- Invalid API key');
        console.log('- API key not activated');
        console.log('- Wrong API key format');
      } else if (error.response.status === 403) {
        console.log('\n💡 This usually means:');
        console.log('- API key doesn\'t have access to this endpoint');
        console.log('- Plan restrictions (free plan limitations)');
        console.log('- HTTPS access not enabled for your plan');
      } else if (error.response.status === 429) {
        console.log('\n💡 This usually means:');
        console.log('- Rate limit exceeded');
        console.log('- Monthly quota reached');
      }
    } else if (error.request) {
      console.error('🌐 Network error:', error.message);
    } else {
      console.error('❌ Error:', error.message);
    }
    
    console.log('\n🔧 Troubleshooting steps:');
    console.log('1. Verify your API key at https://aviationstack.com/dashboard');
    console.log('2. Check your plan limits and features');
    console.log('3. Try using HTTPS if HTTP fails');
    console.log('4. Contact Aviationstack support if issues persist');
  }
};

testAviationstackKey(); 