import classNames from 'classnames';
import style from './SeatSelect.module.scss';
import { Seat } from './components/seat/Seat';

export const SeatSelect = () => {
  let seat = 1
  let row = 1 
  let resetNums = [4,6,5]
  const emptyCells = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26];


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
              if(emptyCells.includes(i)){
                return <div/>
              }else{
              const classes = classNames('ic-seat', {
                [style.available]: true,
                [style.busy]: false,
                [style.selected]: false,
              });
              const data = {
                id: seat,
                row,
                seat,
                status: i !== 3 ? 'available' : 'busy',
              };
              if(seat === resetNums[row-1] || seat === 9){
                seat = 1
                row++;
                data.row = row
              }else{
                seat++
              }
              
             
               return <Seat key={i} className={classes} data={data} />
            };
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
