import { configureStore } from '@reduxjs/toolkit';
import { rtkApi } from '../api/rtkApi';
import { movieReducer } from '../slices/moviesSlice';

export const store = configureStore({
  reducer: { movies: movieReducer, [rtkApi.reducerPath]: rtkApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
