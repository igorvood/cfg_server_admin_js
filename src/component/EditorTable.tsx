import React from "react";
import {Link} from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import {Grid} from "@mui/material";
import {useDemoData} from "@mui/x-data-grid-generator";

export function EditorTable() {


    const columns = [
        { field: 'name', headerName: 'Name', width: 180 },
        {
            field: 'rating',
            headerName: 'Rating',
            type: 'number',
            width: 140,
        },
        {
            field: 'dateCreated',
            headerName: 'Created on',
            width: 180,
            type: 'date',
        },
        {
            field: 'isAdmin',
            headerName: 'Is admin?',
            width: 180,
            type: 'boolean',
        },
    ];


        const {data} = useDemoData({
            dataSet: 'Employee',
            rowLength: 10,
        });


        return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={data.rows} columns={columns} />
            {/*<Grid rows={data.rows} columns={columns} />*/}
            {/*<Grid  />*/}
        </div>
    )
}