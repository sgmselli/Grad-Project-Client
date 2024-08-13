import axios from 'axios';
import { STRIPE_CANCEL_UNSUBSCRIBE, STRIPE_CHECKOUT, STRIPE_UNSUBSCRIBE, VALIDATE_SUBSCRIBED } from './endpoint_urls';

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

export const unsubscribe = async () => {
  try {
    const response = await axios.delete(STRIPE_UNSUBSCRIBE,
    {
      withCredentials: true, 
    });
    return response.data

  } catch (error) {
    return false
  }
}

export const cancel_unsubscribe = async () => {
  try {
    const response = await axios.post(STRIPE_CANCEL_UNSUBSCRIBE,
    {},
    {
      withCredentials: true, 
    });
    return response.data

  } catch (error) {
    return false
  }
}

export const check_cancellation = async () => {
  try {
    const response = await axios.get(VALIDATE_SUBSCRIBED,
    {
      withCredentials: true, 
    });
    return response.data

  } catch (error) {
    return false
  }
}