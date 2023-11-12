import { Link } from 'react-router-dom';
import style from './Header.modle.scss';
interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className={style.Header}>
      <Link to="/">Mein</Link>
      <h1>{props.title}</h1>
    </div>
  );
};
