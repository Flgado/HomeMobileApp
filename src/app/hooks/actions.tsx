import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
  profileImagePath: string;
}

const initialState: ImageState = {
  profileImagePath: "defaultPath",
};

const imageSlice = createSlice({
  name: 'imageProfile',
  initialState,
  reducers: {
    setProfileImage: (state, action: PayloadAction<string>) => {
      state.profileImagePath = action.payload;
    },
  },
});

export const { setProfileImage } = imageSlice.actions;

export default imageSlice.reducer;
