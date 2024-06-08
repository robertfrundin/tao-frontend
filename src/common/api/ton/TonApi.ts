import { HttpClient, Api } from 'tonapi-sdk-js';

// Configure the HTTP client with your host and token

const MY_TOKEN = 'AEZL4JWBAAZPNXIAAAAF27AYZC2PKISL3KKLOJ26RD6WSSUSYBECUELYQSONYBEDRKALROQ';

const httpClient = new HttpClient({
  baseUrl: 'https://testnet.tonapi.io/',
  baseApiParams: {
    headers: {
      Authorization: `Bearer ${MY_TOKEN}`,
      'Content-type': 'application/json'
    }
  }
});

// Initialize the API client
const client = new Api(httpClient);

export default client
