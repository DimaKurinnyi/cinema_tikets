import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSeat, deleteSeat } from '../../../../slices/orderSlice';
import style from './Seat.module.scss';

interface SeatProps {
  className: string;
  data: {
    id: number;
    seat: number;
    row: number;
    status: string;
  };
}

export const Seat = ({ data }: SeatProps) => {
  const { row, seat, status: initStatus } = data;
  const [status, setStatus] = useState(initStatus);
  const classes = classNames(style.seat, style[status]);
  const dispatch = useDispatch();

  const onClick = () => {
    if (initStatus !== 'busy') {
      const isSelected = status === 'available';
      const newStatus = isSelected ? 'selected' : 'available';
      setStatus(newStatus);

      if (isSelected) {
        dispatch(addSeat({ row, seat }));
      } else {
        dispatch(deleteSeat({ row, seat }));
      }
    }
  };
  return (
    <div className={classes} onClick={onClick}>
      <i className="ic-seat" />
      <span className={style.seatNumber}>{seat}</span>
    </div>
  );
};
