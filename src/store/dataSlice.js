import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
    error: null,
    loading:false
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
        state.loading = action.payload;
      },
  },
});

export const { setData, setError,setLoading } = dataSlice.actions;

export default dataSlice.reducer;
