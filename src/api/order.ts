import { OrderData } from '../types';
import { rtkApi } from './rtkApi';

const orderApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateSeatsById: build.mutation<OrderData, OrderData>({
      query: ({ id, buy_seats }) => ({
        url: `seats/${id}`,
        method: 'PATCH',
        body: {
          buy_seats,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateSeatsByIdMutation } = orderApi;
