import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetMoviesByIdQuery, useGetSessionByIdQuery } from '../../api';
import { useUpdateSeatsByIdMutation } from '../../api/order';
import { Header, InfoTable, SeatSelect } from '../../components';
import { OrderState, clearOrder } from '../../slices/orderSlice';
import { RootState } from '../../store/store';
import { OrderData } from '../../types';
import style from './TicketPage.module.scss';

export const TicketPage = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const params = useParams();
  const [isDisabled, setIsDisabled] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const { isLoading, data: sessionData } = useGetSessionByIdQuery(params.sessionId!);
  const { data: movieData } = useGetMoviesByIdQuery(params.movieId!);
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
  const getSessionInfo = (time: string) => {
    return [
      {
        label: 'Start',
        value: time,
      },
    ];
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
    const buySeats = sessionData?.seat?.buy_seats || [];
    const orderData: OrderData = {
      id: sessionData?.seatId!,
      buy_seats: [...buySeats, ...order.seats],
    };
    buyTicket(orderData);
    setIsDisabled(true);
  };
  useEffect(() => {
    if (qrCode) {
      if (imgRef.current) {
        imgRef.current.src = qrCode;
      }
    }
  }, [qrCode]);
  useEffect(() => {
    if (isSuccess) {
      const data = encodeURI(
        JSON.stringify({
          movie: movieData?.title,
          time: sessionData?.time,
          sessionId: sessionData?.id,
          seats: order.seats,
        }),
      );
      setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=200*200&data=${data}`);
      dispatch(clearOrder());
    }
  }, [isSuccess]);

  if (isLoading) return <h1>Loading...</h1>;
  if (!sessionData) return null;
  return (
    <div className={style.TicketPage}>
      <Header title="Buy tickets" />
      <div className={style.content}>
        <SeatSelect buySeats={sessionData?.seat?.buy_seats} />
        <section>
          <div className={style.info}>
            <h1 className={style.plug}>{movieData?.title}</h1>
            <InfoTable data={getSessionInfo(sessionData.time)} />
          </div>
          {seatCount === 0 && <h1 className={style.plug}>Chose a seat</h1>}
          {!!seatCount && (
            <div className={style.info}>
              <h3 className={style.title}>Selected place</h3>
              <InfoTable data={getOrderInfo(order)} />
              <div className={style.info}>
                <InfoTable data={getPriceInfo(seatCount, price)} />
              </div>

              <div className={style.total}>
                <span>Total:</span>
                <strong>{totalPrice}</strong>
              </div>
              {!qrCode && (
                <div
                  className={classNames(style.buyBtn, 'hover', { [style.disable]: isDisabled })}
                  onClick={onClick}>
                  Buy
                </div>
              )}
            </div>
          )}
          {qrCode && (
            <div className={style.qr}>
              <img ref={imgRef} src="" alt="" />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
