import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { albumsApi } from './api/albumsApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  }
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers.js';
export * from './thunks/addUser.js';
export * from './thunks/removeUser.js';
export { useFetchAlbumsQuery } from './api/albumsApi';