import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'GET',
                        params: {
                            userId: user.id
                        }
                    }
                }
            }) 
        }
    }
});

export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };
