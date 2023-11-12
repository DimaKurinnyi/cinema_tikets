import React from 'react'
import style from './MovieList.module.scss'
import { IMovieCard } from '../../types';
import { MovieCard } from '../../components';
const movies: IMovieCard[] = [
    {
      img: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
      title: 'Name movie1',
      genre: 'Actions',
    },
    {
      img: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
      title: 'Name movie2',
      genre: 'Actions',
    },
    {
      img: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
      title: 'Name movie',
      genre: 'Actions',
    },
  ];

export const MovieList = () => {
  return (
    <div className={style.MovieList}>{movies.map((movie) => (
        <MovieCard data={movie} key={movie.title} />
      ))}</div>
  )
}
