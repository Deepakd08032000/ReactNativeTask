import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const getApiCall = createApi({
	reducerPath: 'getApiCall',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
	endpoints: (builder) => ({
		getData: builder.query({
			query: () => ({
				url: 'products',
				method: 'get',
			}),
		}),
		getDataById: builder.query({
			query: (id) => ({
				url: `products/${id}`,
				method: 'get',
			}),
		}),
	})
});
export const { useGetDataQuery, useGetDataByIdQuery, useAddNewPostMutation, useDeletePostMutation } = getApiCall;

