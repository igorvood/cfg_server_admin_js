import React from "react";
import {DataGrid, GridColumns} from "@mui/x-data-grid";
import {useTableDataQuery} from "../store/cfg/admin.api";
import {ITableData} from "../models/table.model";
import {GridColDef, GridEnrichedColDef} from "@mui/x-data-grid/models/colDef/gridColDef";


export function NewEditorTable() {
    const {isLoading: isLoadingTableData, isError: isErrorGraph, data: tableData} = useTableDataQuery('dict_arrow')


    const getColumns = (td: ITableData | undefined) => {
        const cols = td?.columns
            .map(col => {
                    const c: GridEnrichedColDef<any> = {
                        field: col.name,
                        type: 'string',
                        headerName: col.columnComment,
                        editable: col.isInPrimaryKey,
                        width: 200,
                    }
                    return c;
                }
            )
        console.log("cols", cols)
        let cols1 = cols as GridEnrichedColDef<any>[];
        console.log("getColumns", cols1)
        return cols1
    }

    return (
        <div style={{height: 1000, width: '100%'}}>
            {isLoadingTableData && <p className="text-center">Loading...</p>}
            {tableData &&
                <DataGrid rows={[]}
                          columns={ getColumns(tableData)}


                />
            }
        </div>
    )
}