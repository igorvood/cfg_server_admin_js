import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITable} from "../../component/AdminDrawer";


export const cfgApi = createApi({
    reducerPath: 'configuration/Api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9091/'
    }),
    endpoints: build => ({
        tablesSet: build.query<ITable[], void>({
            query: () => ({
                url: `tablesList`
            })
        }),
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

export const {useTablesSetQuery , useLazyTablesSetQuery} = cfgApi
// export const {useGroupListLikeQuery} = tracerApi
// export const {useLazyInvalidateGroupQuery} = tracerApi