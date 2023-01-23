import React from "react";
import {Drawer, MenuItem} from "@mui/material";
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";

export interface ITable{
    id: string
    name: string
}

export interface ITables{
    tablesss: ITable[]
}

export function AdminDrawer({tablesss}: ITables) {

    const {isTableListOpen} = useAppSelector(state => state.adminReducer)
    const {isTableListOpenGlobalState} = useActions();
    return (
        <Drawer open={isTableListOpen}
                >
            {tablesss && tablesss
                .map(table => <MenuItem key={table.id} onClick={()=>isTableListOpenGlobalState(false)}
            >{table.name}</MenuItem>)}
            <MenuItem onClick={()=>isTableListOpenGlobalState(false)}
            >item 1</MenuItem>
            <MenuItem  onClick={()=>isTableListOpenGlobalState(false)}>item 2</MenuItem>
        </Drawer>
    )
}