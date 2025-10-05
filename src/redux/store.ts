import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './slice/taskSlice';
import filterSlice from './slice/filterSlice';

const store = configureStore({
  reducer: {
    tasks: taskSlice,
    filters: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
