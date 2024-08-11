import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Diner } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Diner[], void>({
      query: () => '/restaurantes'
    }),
    getMeal: builder.query<Diner, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetMealQuery } = api

export default api
