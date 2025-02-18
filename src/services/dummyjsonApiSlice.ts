import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dummyjsonApiSlice = createApi({
	reducerPath: "dummyjsonApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
	endpoints: (builder) => ({
		postUserData: builder.mutation({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				body: credentials,
			}),
		}),
		getUserDate: builder.query({
			query: () => "/auth/me"
		}),
		getDashboardData: builder.query({
			query: () => "/products",
		}),
	}),
});

export const { usePostUserDataMutation, useGetUserDateQuery, useGetDashboardDataQuery } = dummyjsonApiSlice;