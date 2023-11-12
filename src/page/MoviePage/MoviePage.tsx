import React from 'react'
import style from './MoviePage.module.scss'
import { Header } from '../../components'

export const MoviePage = () => {
  return (
    <div className={style.MoviePage}>
      <Header title='movie name'/>
    </div>
  )
}
