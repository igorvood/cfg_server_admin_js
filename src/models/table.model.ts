export interface IColumn {
    name: string;
    columnComment: string;
    isInPrimaryKey: boolean;
}

export interface ITableData {
    beg_node_id: string;
    beg_node_type: string;
    common_name: string;
    end_node_id: string;
    end_node_type: string;
    graph_id: string;
    kafka_grp_prop: string;
    property_key: string;
}

export interface ITableData {
    columns: IColumn[];
    tableData: ITableData[];
}
