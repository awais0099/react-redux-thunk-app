import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers.js';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
  	builder.addCase(fetchUsers.pending, (state, action) => {
  		state.isLoading = true;
  	});

  	builder.addCase(fetchUsers.fulfilled, (state, action) => {
  		state.isLoading = false;
  		state.data = action.payload;
  	});

  	builder.addCase(fetchUsers.rejected, (state, action) => {
  		state.isLoading = false;
  		state.error = action.error;
  	}); // 'users/fetch/pending'
  }
});

export const usersReducer = usersSlice.reducer;
