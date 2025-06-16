import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const usersApi = createApi({
    reducerPath: 'users',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints(builder) {
        return {
            fetchUsers: builder.query({
                query:() => {
                    return {
                        url: '/users',
                        method: 'GET'
                    }
                }
            })
        }
    }
})