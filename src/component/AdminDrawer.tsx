import React from "react";
import {Drawer, MenuItem} from "@mui/material";
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";


export function AdminDrawer() {

    const {isTableListOpen} = useAppSelector(state => state.adminReducer)
    const {isTableListOpenGlobalState} = useActions();
    return (
        <Drawer open={isTableListOpen}
                >
            <MenuItem onClick={()=>isTableListOpenGlobalState(false)}
            >item 1</MenuItem>
            <MenuItem  onClick={()=>isTableListOpenGlobalState(false)}>item 2</MenuItem>
        </Drawer>
    )
}