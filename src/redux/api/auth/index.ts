import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<AUTH.GetMeResponse, AUTH.GetMeRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    signUp: builder.mutation<AUTH.PostSignUpResponse, AUTH.PostSignUpRequest>({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    signIn: builder.mutation<AUTH.PostSignInResponse, AUTH.PostSignInRequest>({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    logOut: builder.mutation<AUTH.LogOutResponse, AUTH.LogOutRequest>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "PATCH",
      }),
      invalidatesTags: ["auth"],
    }),
    authForgotPassword: builder.mutation({
      query: (email) => ({
        url: "/auth/forgot",
        method: "POST",
        body: email,
      }),
      invalidatesTags: ["auth"],
    }),
    authResetPassword: builder.mutation({
      query: (newPassword) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: newPassword,
      }),
      invalidatesTags: ["auth"],
    })
  }),
});

export const { useGetMeQuery, useSignUpMutation, useSignInMutation, useLogOutMutation } = api;
