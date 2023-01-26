import React from "react";
import {DataGrid} from "@mui/x-data-grid";
import {useTableDataQuery} from "../store/cfg/admin.api";
import {IDeleteTableData, ITableData} from "../models/table.model";
import {GridEnrichedColDef} from "@mui/x-data-grid/models/colDef/gridColDef";


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
        // getColumnsData(td)
        return cols as GridEnrichedColDef<any>[]
    }

    const primaryKeyList = (td: ITableData) => {
        return td.columns
            .filter(c => c.isInPrimaryKey)
            .map(c => c.name)
    }

    const getColumnsData = (td: ITableData) => {
        var voteCardsArray = [
            { placeInfo: { id: 42, desc: 'stuff 42' } },
            { placeInfo: { id: 65, desc: 'stuff 65' } },
            { placeInfo: { id: 89, desc: 'stuff 89' } },
        ];

        var res = Object.assign({}, ...voteCardsArray.map(card => ({[card.placeInfo.id]: card.placeInfo.desc})));

        console.log("res ",res)



        const primaryKeyColumns: string[] = primaryKeyList(td);
        let undefineds = td.tableData
            .map(entryMap => {
                const idValue = primaryKeyColumns
                    .map(pk =>{
                            return entryMap.cols
                                .filter(c=> c.colName === pk)
                                .map(cv => cv.data)[0]
                        }
                    )
                    .join("_")
                const strings = Object.assign({id: idValue }, ...entryMap.cols.map(row => ({[row.colName]: row.data})));
                return strings
                }
            );
        return undefineds
    }


    const asd =  {
            id: 'asd',

            beg_node_id: 'uasp-streaming-unp-convertor~way4-issuing-operation',
            beg_node_type: 'flink_srv',
            common_name: 'Не задан',
            end_node_id: 'dev_ivr__uasp_realtime__input_converter__way4_issuing_operation__json',
            end_node_type: 'topic',
            graph_id: 'rto_graph',
            kafka_grp_prop: 'producer_default',
            property_key: 'way4-issuing-operation.output.topic.name'
        }
    const asd1 =  {
        id: 'asd1',

        beg_node_id: 'uasp-streaming-unp-convertor~way4-issuing-operation',
        beg_node_type: 'flink_srv',
        common_name: 'Не задан',
        end_node_id: 'dev_ivr__uasp_realtime__input_converter__way4_issuing_operation__json',
        end_node_type: 'topic',
        graph_id: 'rto_graph',
        kafka_grp_prop: 'producer_default',
        property_key: 'way4-issuing-operation.output.topic.name'
    }

    return (
        <div style={{height: 1000, width: '100%'}}>
            {isLoadingTableData && <p className="text-center">Loading...</p>}
            {isErrorTableData && <p className="text-center text-red-600">Не удалось получить данные по таблице</p>}
            {!isLoadingTableData && tableData &&
                <DataGrid
                            // rows={[asd, asd1]}
                            rows={getColumnsData(tableData)}
                          columns={ getColumns(tableData)}


                />
            }
        </div>
    )
}