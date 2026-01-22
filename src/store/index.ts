import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../api';
import { AuthorizationStatus } from '../const';
import { setAuthorizationStatus } from './slices/user-slice';
import appReducer from './slices/app-slice';
import offerReducer from './slices/offer-slice';
import offersReducer from './slices/offers-slice';
import userReducer from './slices/user-slice';

let store: ReturnType<typeof configureStore>;

const api = createAPI(() => {
  store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
});

const rootReducer = combineReducers({
  app: appReducer,
  offers: offersReducer,
  offer: offerReducer,
  user: userReducer,
});

store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
