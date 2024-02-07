import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import ProductSlice1 from '../redux/reducers/ProductSlice';
// import ProductSlice from '../redux/actions/ProductSlice';
export const getApiCall = createApi({
    reducerPath: 'getApiCall',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
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
        addNewPost: builder.mutation({
            query: (data) => ({
                url: `products`,
                method: 'POST',
                body: data,

            }),
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
        }),
    })
});
export const { useGetDataQuery, useGetDataByIdQuery, useAddNewPostMutation, useDeletePostMutation } = getApiCall;

