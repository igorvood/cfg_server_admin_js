export interface IColumn {
    name: string;
    columnComment: string;
    isInPrimaryKey: boolean;
}

export interface IDeleteTableData {
    beg_node_id: string;
    beg_node_type: string;
    common_name: string;
    end_node_id: string;
    end_node_type: string;
    graph_id: string;
    kafka_grp_prop: string;
    property_key: string;
}

export interface Col {
    colName: string;
    data: string;
}

export interface INewTableData {
    cols: Col[];
}

export interface ITableData {
    tableId: string;
    tableComment: string;
    columns: IColumn[];
    tableData: INewTableData[];
}

export interface ITable{
    id: string
    name: string
}

export interface ITables{
    tablesss: ITable[]
}

export interface ISVG{
    svgData: string
}

