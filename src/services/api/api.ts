import axios, { AxiosRequestConfig } from 'axios';
import { API_GateController_URL } from './config';

interface ControlGateRequest {
  topic: string;
  message: string;
}

const controlGate = async (token: string, requestData: ControlGateRequest) => {
  const url = API_GateController_URL;

  const options: AxiosRequestConfig = {
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    data: requestData,
  };

  try {
    const response = await axios(options);
    
    return response.status;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default controlGate;