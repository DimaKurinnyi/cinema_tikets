import { Header } from '../../components';
import { Movie } from '../../types';
import style from './MoviePage.module.scss';
const data: Movie = {
  img: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
  title: 'Name movie1',
  genre: 'Actions',
  description: 'Lofgnniii ihj ihiu iuhiuhb iuhuh iuhuhui ihuhiuhiuhv  oerg eo io  ehhoh  oihh ',
  times: ['10:00', '12.:30', '13:30', '14:30', '15:30'],
  actors: ['Cate Blanchett', 'Tom Hanks', 'Robert De Niro'],
  country: 'USA',
  duration: 93,
  year: 2023,
  premier: '21 aug 2023',
};

export const MoviePage = () => {
  return (
    <div className={style.MoviePage}>
      <Header title="movie name" />
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
