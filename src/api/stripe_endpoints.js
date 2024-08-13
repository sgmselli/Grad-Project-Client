import axios from 'axios';
import { STRIPE_CHECKOUT } from './endpoint_urls';

export const createCheckoutSession = async () => {

    try {
        const response = await axios.post(STRIPE_CHECKOUT, 
            {},
            {
                withCredentials: true, 
            }
        );

        return response.data.url
  
      } catch (error) {
        return {'data':error, 'status':error.status} 
      }
}