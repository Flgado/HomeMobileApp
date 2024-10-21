import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';
const DEFAULT_IMAGE_URI = require('../../assets/images/kemal.jpg');

interface ImageState {
  profileImagePath: ImageSourcePropType;
  imageWasFetch: boolean;
}

const initialState: ImageState = {
  profileImagePath: DEFAULT_IMAGE_URI,
  imageWasFetch: false,
};

const imageSlice = createSlice({
  name: 'imageProfile',
  initialState,
  reducers: {
    setProfileImage: (state, action: PayloadAction<ImageSourcePropType>) => {
      state.profileImagePath = action.payload;
    },
    setImageWasFetch: (state, action: PayloadAction<boolean>) => {
      state.imageWasFetch = action.payload;
    },
  },
});

export const { setProfileImage, setImageWasFetch } = imageSlice.actions;
export default imageSlice.reducer;
