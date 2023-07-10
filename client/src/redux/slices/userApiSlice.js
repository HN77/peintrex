/* eslint-disable no-undef */
import { USERS_URL } from '../constants/urlConstants';
import { apiSlice } from './apiSlice';

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signin`,
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/signout`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  userApiSlice;
