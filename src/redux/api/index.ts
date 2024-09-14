import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_API}/api/v1`,
    prepareHeaders: (headers) => {
        const token = JSON.parse(localStorage.getItem("authTokens")!)
        if(token) {
        headers.set('Authorization', `Bearer ${token.accessToken}`)
        }
    },
});

const baseQueryExtended: BaseQueryFn = async(args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)
    return result;
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryExtended,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ["auth"],
    endpoints: () => ({})
})