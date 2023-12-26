import { useParams } from 'react-router-dom';
import { Header } from '../../components';

import style from './MoviePage.module.scss';

import { useGetMoviesByIdQuery } from '../../api';


export const MoviePage = () => {
  const params = useParams()
  const {isLoading,data} =useGetMoviesByIdQuery(params.id!)

  if(isLoading)return <h1>Loading...</h1>

  if(!data)return <Header title='No result'></Header>
  

  return (
    <div className={style.MoviePage}>
      <Header title={data.title} />
      <div className={style.content}>
        <div className="">
          <div className={style.img}>
            <img src={data.img} alt={data.title} />
          </div>
          <div className={style.desc}>{data.description}</div>
        </div>
        <div className={style.rightCol}>
          <div className={style.info}>
            <div className={style.infoLabel}>Premier</div>
            <div className={style.infoValue}>{data.premier}</div>
            <div className={style.infoLabel}>In roles</div>
            {/* {data.actors.map(actor=><div key={actor} className={style.infoValue}>{actor}</div>)} */}
            <div className={style.infoValue}>{data.actors.join(', ')}</div>
            <div className={style.infoLabel}>Length</div>
            <div className={style.infoValue}>{data.duration}</div>
            <div className={style.infoLabel}>Country</div>
            <div className={style.infoValue}>{data.country}</div>
            <div className={style.infoLabel}>Year</div>
            <div className={style.infoValue}>{data.year}</div>
          </div>
          <div className={style.session}>
            <h3 className={style.subtitle}>Session</h3>
            <div className={style.sessionTimesList}>
              {data.times.map(time=><div key={time} className={style.sessionTimeItem}>{time}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
