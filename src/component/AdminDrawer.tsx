import React from "react";
import {Divider, Drawer, MenuItem} from "@mui/material";
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";
import {useTablesSetQuery} from "../store/cfg/admin.api";

export interface ITable{
    id: string
    name: string
}

export interface ITables{
    tablesss: ITable[]
}

export function AdminDrawer() {

    const {isLoading: isLoadingTables, isError: isErrorTables, data: tablesList} = useTablesSetQuery()

    const {isTableListOpen} = useAppSelector(state => state.adminReducer)
    const {isTableListOpenGlobalState} = useActions();

    const clickTableHandler = (tableId: string) => {
        isTableListOpenGlobalState(false)
    }

    return (
        <Drawer open={isTableListOpen}
                >
            {isLoadingTables && <p className="text-center">Tables list is loading...</p>}
            {isErrorTables && <p className="text-center text-red-600">Не удалось получить список таблиц</p>}

            {tablesList && tablesList
                .map(table =><div key={'div'+table.id}> <MenuItem key={table.id} onClick={()=>clickTableHandler(table.id)}
                    >{table.name}</MenuItem>
                <Divider absolute={false} key={'Divider'+table.id}/>
                </div>
                )


            }
        </Drawer>
    )
}