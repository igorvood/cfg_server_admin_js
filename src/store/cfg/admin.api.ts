import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {ServerResponse} from "http";
import {ISVG, ITable, ITableData} from "../../models/table.model";


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
        tableData: build.query<ITableData, string>({
            query: (tableName: string) => ({
                url: `/tableData/${tableName}`
            }),
        }),
        pumlSVG: build.query<ISVG, void>({
            query: () => ({
                url: `/pumlSVG`
            }),

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
export const {useTableDataQuery , useLazyTableDataQuery} = cfgApi
export const {usePumlSVGQuery , useLazyPumlSVGQuery} = cfgApi
