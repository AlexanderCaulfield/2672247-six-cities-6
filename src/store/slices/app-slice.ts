import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../../const';

export type AppState = {
  city: string;
};

const initialState: AppState = {
  city: DEFAULT_CITY.name,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { changeCity } = appSlice.actions;

export default appSlice.reducer;
