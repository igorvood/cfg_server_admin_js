import React from "react";
import {DataGrid, GridColumns, GridOverlay, GridToolbar} from '@mui/x-data-grid';
import {Box, LinearProgress} from "@mui/material";
import {useDemoData} from "@mui/x-data-grid-generator";
import {useLazyTableDataQuery, useTableDataQuery} from "../store/cfg/admin.api";

export function EditorTable() {


    const columns : GridColumns= [
        {field: 'name',
            headerName: 'Name',
            width: 180,
            editable: true,
            type: 'string',
            cellClassName: 'super-app-theme--cell',

        },
        {
            field: 'rating',
            headerName: 'Rating',
            type: 'number',
            // width: 140,
        },
        {
            field: 'dateCreated',
            headerName: 'Created on',
            // width: 180,
            type: 'date',
            editable: true
        },
        {
            field: 'isAdmin',
            headerName: 'Is admin?',
            width: 180,
            type: 'boolean',
        },
    ];

    function CustomLoadingOverlay() {
        return (
            <GridOverlay>
                <div style={{position: 'absolute', top: 0, width: '100%'}}>
                    <LinearProgress/>
                </div>
            </GridOverlay>
        );
    }

    const {data} = useDemoData({
        dataSet: 'Employee',
        rowLength: 1000,
    });
    const { isLoading: isLoadingGraph, isError: isErrorGraph, data: graph} = useTableDataQuery('dict_arrow')
    return (
        <div style={{height: 1000, width: '100%'}}>
            <Box
                sx={{
                    height: 300,
                    width: '100%',
                    '& .super-app-theme--cell': {
                        backgroundColor: 'rgba(71,63,48,0.55)',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                    '& .super-app.negative': {
                        backgroundColor: 'rgba(157, 255, 118, 0.49)',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                    '& .super-app.positive': {
                        backgroundColor: '#d47483',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                }}
            >
            <DataGrid rows={data.rows}
                      columns={columns}
                      onCellClick={() => {
                          // console.log(data)

                          console.log(graph)
                      }
                        }

                      autoHeight
                      checkboxSelection
                      components={{
                          Toolbar: GridToolbar,
                          LoadingOverlay: CustomLoadingOverlay,
                      }}
                      onCellEditCommit={(params, event, details) => {
                          console.log("params => ", params)
                          console.log("event => " , event)
                          console.log("details => " , details)
                      }

                      }

            />
            </Box>
        </div>
    )
}