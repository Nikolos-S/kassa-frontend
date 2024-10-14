import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from '../resourses/request';

export type Session = {
  id: string,
  created: string,
};

export const sessionApi = createApi({
reducerPath: 'sessionApi',
baseQuery: baseQuery(fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' })),
endpoints: (builder) => ({
  
}),
})