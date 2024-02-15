import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  tagTypes: ['Item'],
  endpoints: builder => ({
    getAllItems: builder.query({
      query: name => 'items',
      providesTags: ['Item'],
    }),
    postItem: builder.mutation({
      query: newItem => ({
        url: 'items',
        method: 'POST',
        body: {
          title: newItem.title,
          image: newItem.image,
          details: newItem.description,
        },
        headers: {
          'X-Access-Token':
            'ZopHp4TC4ousbqoVSV3uZYFgBszCowcx5jrwRFqGe5BX1Cnb8qbV8aGUpssDFlrh',
        },
      }),
      invalidatesTags: ['Item'],
    }),
  }),
});

export const {useGetAllItemsQuery, usePostItemMutation} = itemApi;
