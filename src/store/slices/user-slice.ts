import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';

export type UserState = {
  authorizationStatus: AuthorizationStatus;
};

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { setAuthorizationStatus } = userSlice.actions;

export default userSlice.reducer;
