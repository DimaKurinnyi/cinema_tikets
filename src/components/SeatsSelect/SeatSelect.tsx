import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { useGetSessionByIdQuery } from '../../api';
import { Seat as ISeat } from '../../types';
import style from './SeatSelect.module.scss';
import { Seat } from './components/seat/Seat';

type BuySeats = ISeat[] | undefined

interface SeatSelectProps{
  buySeats:BuySeats

}

export const SeatSelect = ({buySeats}:SeatSelectProps) => {

  let seat = 1;
  let row = 1;
  let resetNums = [4, 6, 5];
  const emptyCells = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26];

  const isBusySeat = (row: number, seat: number, buySeats: ISeat[] | undefined) => {
    return buySeats?.some((buySeat) => buySeat.row === row && buySeat.seat === seat);
  };

  

  return (
    <div className={style.SeatSelect}>
      <div className={style.display}>
        <i className="ic-display"></i>
        <span>Screen</span>
      </div>

      <div className={style.place}>
        <div className={style.rows}>
          {Array(7)
            .fill(0)
            .map((item, i) => (
              <div className={style.row} key={i}>
                {i + 1}
              </div>
            ))}
        </div>
        <div className={style.seats}>
          {Array(63)
            .fill(0)
            .map((item, i) => {
              if (emptyCells.includes(i)) {
                return <div />;
              } else {
                const seatData = {
                  id: seat,
                  row,
                  seat,
                  status: isBusySeat(row, seat, buySeats) ? 'busy' : 'available',
                };
                if (seat === resetNums[row - 1] || seat === 9) {
                  seat = 1;
                  row++;
                  seatData.row = row;
                } else {
                  seat++;
                }

                return <Seat key={i} data={seatData} />;
              }
            })}
        </div>
      </div>
      <div className={style.info}>
        <div className={classNames(style.infoItem, style.available)}>
          <i className="ic-Dot" />
          <span>Available</span>
        </div>
        <div className={classNames(style.infoItem, style.busy)}>
          <i className="ic-Dot" />
          <span>Busy</span>
        </div>
        <div className={classNames(style.infoItem, style.selected)}>
          <i className="ic-Dot" />
          <span>Selected</span>
        </div>
      </div>
    </div>
  );
};
