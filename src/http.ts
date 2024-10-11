import axios from 'axios';
import https from 'https';

// const baseUrl = 'https://localhost:7066/';
 const baseUrl = 'https://api.tryfrosti.com/';
export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});
