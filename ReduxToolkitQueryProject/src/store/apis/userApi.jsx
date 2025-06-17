import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const delay = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve,duration)
    })
}

const usersApi = createApi({
    reducerPath: 'users',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async(...args) => {
            await delay(1000);
            return fetch(args);
        }
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
            }),
            addUsers: builder.mutation({
                query:() => {
                    return {
                        url: '/users',
                        method: 'POST',
                        body: {
                            name:'İkra'
                        }
                    }
                }
            }),
            removeUsers: builder.mutation({
                query:(user) => {
                    return {
                        url: `/users/${user.id}`,
                        method: 'DELETE',
                    }
                }
            }),
        }
    }
})

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } = usersApi;

export { usersApi };