import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import movies from '../slices/movies';
import settings from '../slices/settings';
import users from '../slices/users';

const preloadedState = {
  users: undefined,
  movies: undefined,
  settings: undefined,
}

export const store = configureStore({
  reducer: {
    users,
    movies,
    settings,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
