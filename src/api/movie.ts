import { Movie, MovieWithSessions } from '../types';
import { rtkApi } from './rtkApi';

const moviesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMovies: build.query<Movie[], void>({
      query: () => 'movies',
    }),
    getMoviesById: build.query<MovieWithSessions, string>({
      query: (id) => `movies/${id}?_embed=sessions`,
      // transformResponse:(data:Movie[])=>{
      //     return data[0]
      // }
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllMoviesQuery, useGetMoviesByIdQuery } = moviesApi;
