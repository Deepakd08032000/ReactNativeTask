// import { configureStore } from '@reduxjs/toolkit';
// import { api } from './api'; // Import your RTK Query API instance
// import userSlice from './userSlice'; // Import your user slice

// const store = configureStore({
//     reducer: {
//         [api.reducerPath]: api.reducer, // Add the RTK Query reducer
//         user: userSlice.reducer, // Add your custom user slice reducer
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(api.middleware),
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { getApiCall } from "../services/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import ProductSlice from "./actions/ProductSlice";
export const store = configureStore({
    reducer: {
        // product: ProductSlice,
        // auth: authReducer,
        [getApiCall.reducerPath]: getApiCall.reducer
        // [getApiCall.reducerPath]: getApiCall.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([getApiCall.middleware,
        ])
})
setupListeners(store.dispatch)
