import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: builder => ({
    getAllItems: builder.query({
      query: name => 'todos',
    }),
  }),
});

export const {useGetAllItemsQuery} = itemApi;
