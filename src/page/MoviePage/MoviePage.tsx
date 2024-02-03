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
  console.log(data.sessions);
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

            <div className={style.sessionTimesList}>
              {data.sessions.map((session) => (
                <Link to={`/sessions/${session.id}`} key={session.id}>
                  <div key={session.time} className={style.sessionTimeItem}>
                    {session.time}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
