import React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {useTableDataQuery} from "../store/cfg/admin.api";
import {ITableData} from "../models/table.model";
import {GridColDef} from "@mui/x-data-grid/models/colDef/gridColDef";


export function NewEditorTable() {
    const { isLoading: isLoadingGraph, isError: isErrorGraph, data: tableData} = useTableDataQuery('dict_arrow')


    const getColumns = ({columns}:ITableData) =>{
        const cols = columns.map(col => {
            const c: GridColDef = {
                field: col.name,
                type: 'string',
                headerName: col.columnComment,
                editable: col.isInPrimaryKey
            }
            c
        }


    )
    }

    return (
        <div style={{height: 1000, width: '100%'}}>

            {/*<DataGrid rows={data.rows}*/}
            {/*          columns={columns}*/}
            {/*    // onCellClick={() => console.log(data)}*/}
            {/*          autoHeight*/}
            {/*          checkboxSelection*/}
            {/*          components={{*/}
            {/*              Toolbar: GridToolbar,*/}
            {/*              LoadingOverlay: CustomLoadingOverlay,*/}
            {/*          }}*/}
            {/*          onCellEditCommit={(params, event, details) => {*/}
            {/*              console.log("params => ", params)*/}
            {/*              console.log("event => " , event)*/}
            {/*              console.log("details => " , details)*/}
            {/*          }*/}
            {/*          }*/}
            {/*/>*/}
        </div>
    )
}