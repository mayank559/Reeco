
import { createSlice } from '@reduxjs/toolkit';
import tableData from '../tableData.json'; 
const tableSlice = createSlice({
  name: 'table',
  initialState: {
    data: tableData,
  },
  reducers: {
    updateStatus: (state, action) => {
      const { index, status } = action.payload;
      state.data[index].status = status;
    },
  },
});

export default tableSlice.reducer;


export const { updateStatus } = tableSlice.actions;
