import { Route, Routes } from 'react-router-dom';
import style from './App.module.scss';
import { MainPage, MoviePage, TicketPage } from './page';

export const App = () => {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path ='/sessions/:id' element = {<TicketPage/>}/>
      </Routes>
    </div>
  );
};
