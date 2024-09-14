import { configureStore } from '@reduxjs/toolkit';
// Import slices here, e.g.:
// import counterSlice from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    // Add reducers here, e.g.:
    // counter: counterSlice,
  },
});