import { Link } from 'react-router-dom';
import { Movie } from '../../types';
import style from './MovieCard.module.scss';
interface MovieCardProps {
  data: Movie;
}
export const MovieCard = (props: MovieCardProps) => {
  return (
    <Link to={`/movie/${props.data.id}`}>
      <div className={style.MovieCard}>
        <div className={style.imgBlock}>
          <img src={props.data.img} alt="" />
        </div>
        <h3 className={style.title}>{props.data.title}</h3>
        <div className={style.genre}>{props.data.genre}</div>
      </div>
    </Link>
  );
};
