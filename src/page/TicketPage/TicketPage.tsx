import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Header, InfoTable, SeatSelect } from '../../components';
import { OrderState } from '../../slices/orderSlice';
import { RootState } from '../../store/store';
import style from './TicketPage.module.scss';
import { useParams } from 'react-router-dom';
import { useGetSessionByIdQuery } from '../../api';

export const TicketPage = () => {
  const params = useParams();
  const { isLoading, data } = useGetSessionByIdQuery(params.id!);

  const { order } = useSelector((state: RootState) => state);
  const price = 45;
  const seatCount = order.seats.length;
  const totalPrice = price * order.seats.length;

  const getOrderInfo = (order: OrderState) => {
    return order.seats.map(({ row, seat }, i) => ({
      label: `Ticket${i + 1}`,
      value: `Row ${row} place ${seat}`,
    }));
  };
  const getPriceInfo = (count: number, price: number) => {
    return [
      {
        label: 'Quantity',
        value: count,
      },
      {
        label: 'Price',
        value: price,
      },
    ];
  };
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className={style.TicketPage}>
      <Header title="Tickets" />
      <div className={style.content}>
        <SeatSelect buySeats={data?.seat?.buy_seats} />
        {seatCount === 0 && <h1 className={style.plug}>Chose a seat</h1>}
        {!!seatCount && (
          <div className={style.info}>
            <h3 className={style.title}>Name Movie</h3>
            <InfoTable data={getOrderInfo(order)} />
            <div className={style.info}>
              <InfoTable data={getPriceInfo(order.seats.length, price)} />
            </div>

            <div className={style.total}>
              <span>Total:</span>
              <strong>{totalPrice}</strong>
            </div>
            <div className={classNames(style.buyBtn, 'hover')}>Buy</div>
          </div>
        )}
      </div>
    </div>
  );
};
