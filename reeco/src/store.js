
import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './tableSlice';

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

export default store;
