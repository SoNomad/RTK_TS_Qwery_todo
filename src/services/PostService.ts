import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    // getPosts
    fetchPosts: builder.query<IPost[], number>({
      query: (_limit: number = 5) => ({ url: '/posts', params: { _limit: _limit } }),
      providesTags: ['Post'],
    }),
    // createPost
    createPost: builder.mutation<IPost, IPost>({
      query: (post) => ({ url: '/posts', method: 'POST', body: post }),
      invalidatesTags: ['Post'],
    }),
    // updatePost
    updatePost: builder.mutation<IPost, IPost>({
      query: (post) => ({ url: `/posts/${post.id}`, method: 'PUT', body: post }),
      invalidatesTags: ['Post'],
    }),
    // deletePost
    deletePost: builder.mutation<IPost, IPost>({
      query: (post) => ({ url: `/posts/${post.id}`, method: 'DELETE' }),
      invalidatesTags: ['Post'],
    }),
  }),
});
