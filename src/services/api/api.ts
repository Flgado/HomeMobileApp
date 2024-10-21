import axios, { AxiosRequestConfig } from 'axios';
import { API_GateController_URL, API_GetImageProfile_URL } from './config';
import { getAccessToken } from '../auth/GetTokens';
import { ImageSourcePropType } from 'react-native';

interface ControlGateRequest {
  message: string;
}

export const controlGate = async (requestData: ControlGateRequest) => {
  const url = API_GateController_URL;
  const accessToken = await getAccessToken();
  const options: AxiosRequestConfig = {
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
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

export const getProfileImage = async (): Promise<ImageSourcePropType> => {
  const url = API_GetImageProfile_URL;
  const accessToken = await getAccessToken(); 
  const options: AxiosRequestConfig = {
    method: 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios(options);
    if (response.data.image) {
      return {
        uri: `data:image/jpeg;base64,${response.data.image}`,
      };
    } else {
      throw new Error('Image data not found in response.');
    }
  } catch (error) {
    console.error('Error fetching profile image:', error);
    throw error;
  }
};