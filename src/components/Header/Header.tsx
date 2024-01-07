import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { clearOrder } from '../../slices/orderSlice';
interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  const dispatch = useDispatch()

  const handleClick = ()=>{
    dispatch(clearOrder())
  }
  return (
    <div className={style.Header}>
      <Link className={style.backBtn} onClick={handleClick} to="/">Mein</Link>
      <h1 className={style.title} >{props.title}</h1>
    </div>
  );
};
