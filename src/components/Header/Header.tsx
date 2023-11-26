import { Link } from 'react-router-dom';
import style from './Header.module.scss';
interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className={style.Header}>
      <Link className={style.backBtn} to="/">Mein</Link>
      <h1 className={style.title} >{props.title}</h1>
    </div>
  );
};
