import { MovieList } from '../../components';
import style from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <h1 className={style.title}>MainPage</h1>
      <MovieList />
    </div>
  );
};
