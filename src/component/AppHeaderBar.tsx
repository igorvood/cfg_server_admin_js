import React from 'react';
import {AppBar, IconButton,  Toolbar} from "@mui/material";
import Typography from '@mui/material/Typography';
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";


export function AppHeaderBar() {

    const {isTableListOpen} = useAppSelector(state => state.adminReducer)
    const {isTableListOpenGlobalState} = useActions();

    return (
        <AppBar position="static"
                // iconElementRight={}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => {
                        console.log('isTableListOpen => ' + isTableListOpen)
                        isTableListOpenGlobalState(true)
                    }
                }
                >|||</IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Сервер конфигураций
                </Typography>
            </Toolbar>
        </AppBar>
    )
}


