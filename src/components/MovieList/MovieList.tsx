import style from './MovieList.module.scss';


import { MovieCard } from '../../components';

import { useGetAllMoviesQuery } from '../../api';

export const MovieList = () => {
  const {isLoading,data} = useGetAllMoviesQuery()

  if(isLoading) return <h1>Loading...</h1>
  return (
    <div className={style.MovieList}>
      {data?.map((movie) => (
        <MovieCard data={movie} key={movie.id} />
      ))}
    </div>
  );
};
