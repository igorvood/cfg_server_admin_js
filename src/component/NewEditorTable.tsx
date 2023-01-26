import React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {useTableDataQuery} from "../store/cfg/admin.api";
import {ITableData} from "../models/table.model";
import {GridEnrichedColDef} from "@mui/x-data-grid/models/colDef/gridColDef";
import {GridToolbarColumnsButton} from "@mui/x-data-grid/components/toolbar/GridToolbarColumnsButton";


export function NewEditorTable() {
    const {isLoading: isLoadingTableData, isError: isErrorTableData, data: tableData} = useTableDataQuery('dict_arrow')


    const getColumns = (td: ITableData) => {
        const cols = td.columns
            .map(col => {
                    const c: GridEnrichedColDef<any> = {
                        field: col.name,
                        type: 'string',
                        headerName: col.columnComment,
                        editable: !col.isInPrimaryKey,
                        width: 200,
                    }
                    return c;
                }
            )
            .sort(q => q.editable===true? 1: 0)
        return cols as GridEnrichedColDef<any>[]
    }

    const primaryKeyList = (td: ITableData) => {
        return td.columns
            .filter(c => c.isInPrimaryKey)
            .map(c => c.name)
    }

    const getColumnsData = (td: ITableData) => {
        const primaryKeyColumns: string[] = primaryKeyList(td);
        return td.tableData
            .map(entryMap => {
                    const idValue = primaryKeyColumns
                        .map(pk => {
                                return entryMap.cols
                                    .filter(c => c.colName === pk)
                                    .map(cv => cv.data)[0]
                            }
                        )
                        .join("_")
                    return Object.assign({id: idValue}, ...entryMap.cols.map(row => ({[row.colName]: row.data})))
                }
            )
    }

    return (
        <div style={{height: 1000, width: '100%'}}>
            {isLoadingTableData && <p className="text-center">Loading...</p>}
            {isErrorTableData && <p className="text-center text-red-600">Не удалось получить данные по таблице</p>}
            {!isLoadingTableData && tableData &&
                <DataGrid autoHeight
                          checkboxSelection
                          components={{
                              Toolbar: GridToolbar,
                          }}
                          rows={getColumnsData(tableData)}
                          columns={getColumns(tableData)}


                />
            }
        </div>
    )
}