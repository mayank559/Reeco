
import { createSlice } from '@reduxjs/toolkit';
import tableData from './tableData.json'; 
const tableSlice = createSlice({
  name: 'table',
  initialState: {
    data: tableData,
  },
  reducers: {},
});

export default tableSlice.reducer;
