// profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {
    setProfile: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearProfile: (state) => {
      state.name = '';
      state.email = '';
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
