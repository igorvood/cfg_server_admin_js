import React, {useCallback} from "react";
import {DataGrid, GridEditRowsModel, GridToolbar} from "@mui/x-data-grid";
import {useTableDataQuery} from "../store/cfg/admin.api";
import {ITableData} from "../models/table.model";
import {GridEnrichedColDef} from "@mui/x-data-grid/models/colDef/gridColDef";
import {Alert, Box} from "@mui/material";
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";
import {GridEventListener} from "@mui/x-data-grid/models/events";
import {GridEventsStr} from "@mui/x-data-grid/models/events/gridEvents";
import {GridCellEditCommitParams} from "@mui/x-data-grid/models/params/gridEditCellParams";
import {GridEditCellProps, GridEditRowProps} from "@mui/x-data-grid/models/gridEditRowModel";


export function NewEditorTable() {
    // const tableName = 'dict_topic_owner'
    const tableName = 'dict_arrow'
    // const {currentTableName: tableName} = useAppSelector(state => state.adminReducer)
    const {editedData} = useAppSelector(state => state.adminReducer)
    const {isLoading: isLoadingTableData, isError: isErrorTableData, data: tableData} = useTableDataQuery(tableName)


    const getColumns = (td: ITableData) => {
        let number = 100 / td.columns.length;
        const cols = td.columns
            .map((col, index) => {
                    const c: GridEnrichedColDef<any> = {
                        field: col.name,
                        type: 'string',
                        headerName: col.columnComment,
                        editable: !col.isInPrimaryKey,
                        // width: '${number}%',
                        // minWidth: '${number}%',
                        flex: 1,
                        minWidth: 100,
                        cellClassName: col.isInPrimaryKey ? 'super-app-theme--no_edit_cell' : undefined,
                    }
                    return c;
                }
            )
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

    // const [editRowsModel, setEditRowsModel] = React.useState({});
    // const {editedData, setEditedData} = useAppSelector(state => state.adminReducer)
    const {editedDataGlobalState} = useActions();

    const handleEditRowsModelChange_2222222 = (gridCellEditCommitParams: GridCellEditCommitParams) =>{

        const {id: editableId, field: editableField, value: editableValue} = gridCellEditCommitParams

        editedDataGlobalState(gridCellEditCommitParams);
    }

    return (
        <div style={{height: 1000, width: '100%'}}>
            {isLoadingTableData && <p className="text-center ">Loading...</p>}
            {isErrorTableData && <p className="text-center text-red-600">Не удалось получить данные по таблице</p>}
            {!isLoadingTableData && tableData &&
                <Box
                    sx={{
                        height: 300,
                        width: '100%',
                        '& .super-app-theme--no_edit_cell': {
                            backgroundColor: 'rgba(138,128,114,0.55)',
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
                ><h4
                    className="text-center text-green-800">{tableData.tableComment + " (" + tableData.tableId + ")"}</h4>
                    <Alert severity="info" style={{marginBottom: 8}}>
                        <code>editRowsModel: {JSON.stringify(editedData)}</code>
                    </Alert>
                    <Stack spacing={20} direction="row">
                        <Badge badgeContent={4} color="error">
                            <DoubleArrowIcon color="disabled"/>
                        </Badge>
                        <Badge badgeContent={40} color="error">
                            <DeleteForeverIcon color="inherit"/>
                        </Badge>
                    </Stack>
                    <DataGrid autoHeight
                              checkboxSelection
                              style={{flex: 1}}
                              components={{
                                  Toolbar: GridToolbar,
                              }}
                              rows={getColumnsData(tableData)}
                              columns={getColumns(tableData)}
                              rowsPerPageOptions={[5, 10, 20, 50, 100]}
                              pageSize={20}
                    />
                </Box>
            }
        </div>
    )
}