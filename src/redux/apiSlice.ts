import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				body: credentials,
			}),
		}),
		fetchDashboardData: builder.query({
			query: () => "/products",
		}),
	}),
});

export const { useLoginMutation, useFetchDashboardDataQuery } = apiSlice;