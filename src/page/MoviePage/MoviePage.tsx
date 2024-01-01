import { Link, useParams } from 'react-router-dom';
import { Header, InfoTable } from '../../components';

import style from './MoviePage.module.scss';

import { useGetMoviesByIdQuery } from '../../api';
import { helpers } from './helpers';

export const MoviePage = () => {
  const params = useParams();
  const { isLoading, data } = useGetMoviesByIdQuery(params.id!);

  if (isLoading) return <h1>Loading...</h1>;

  if (!data) return <Header title="No result"></Header>;
  const id = 1;

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
          <InfoTable data={helpers.getInfoData(data)} />

          <div className={style.session}>
            <h3 className={style.subtitle}>Session</h3>
            <Link to={`/buy/${id}`}>
              <div className={style.sessionTimesList}>
                {data.times.map((time) => (
                  <div key={time} className={style.sessionTimeItem}>
                    {time}
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
