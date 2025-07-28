import { configureStore } from '@reduxjs/toolkit';
import modals from './slices/modals';
export const store = configureStore({
  reducer: {
    modals,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
