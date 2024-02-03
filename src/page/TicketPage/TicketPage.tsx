import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetSessionByIdQuery } from '../../api';
import { useUpdateSeatsByIdMutation } from '../../api/order';
import { Header, InfoTable, SeatSelect } from '../../components';
import { OrderState, clearOrder } from '../../slices/orderSlice';
import { RootState } from '../../store/store';
import { OrderData } from '../../types';
import style from './TicketPage.module.scss';

export const TicketPage = () => {
  const params = useParams();
  const [isDisabled, setIsDisabled] = useState(false);
  const { isLoading, data } = useGetSessionByIdQuery(params.id!);
  const [buyTicket, { isSuccess }] = useUpdateSeatsByIdMutation();
  const dispatch = useDispatch();
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

  const onClick = () => {
    const buySeats = data?.seat?.buy_seats || [];
    const orderData: OrderData = {
      id: data?.seatId!,
      buy_seats: [...buySeats, ...order.seats],
    };
    buyTicket(orderData);
    setIsDisabled(true)
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(clearOrder());
    }
  }, [isSuccess]);

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
            <div
              className={classNames(style.buyBtn, 'hover', { [style.disable]: isDisabled })}
              onClick={onClick}>
              Buy
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
