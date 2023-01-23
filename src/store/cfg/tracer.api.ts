import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const cfgApi = createApi({
    reducerPath: 'configuration/Api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/'
    }),
    endpoints: build => ({
        // getGraphByGroup: build.query<IGraph, string>({
        //     query: (groupName: string) => ({
        //         url: `arrows/byGroup/${groupName}`
        //     })
        // }),
        // invalidateGroup: build.query<void, string>({
        //     query: (groupName: string) => ({
        //         url: `invalidate/${groupName}`
        //     })
        // }),
        // groupListLike: build.query<IGroupServiceDto[], string>({
        //     query: (groupNameLike: string) => ({
        //         url: `group/like`,
        //         params: {
        //             groupIdLike: groupNameLike,
        //             limit: 10
        //         }
        //     })
        // }),

    })

})

// export const {useLazyGetGraphByGroupQuery} = tracerApi
// export const {useGroupListLikeQuery} = tracerApi
// export const {useLazyInvalidateGroupQuery} = tracerApi