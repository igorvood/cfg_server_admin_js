import React from 'react';
import {AppHiderBar} from "./component/AppHiderBar";
import {AdminDrawer, ITable, ITables} from "./component/AdminDrawer";
import {useTablesSetQuery} from "./store/cfg/tracer.api";




function App() {
    const tables1 = () =>{
        const t1: ITable = {
            id: '1',
            name: 'fsdfsd sdf sd fsd fsd f sdf name_1',
        };
        const t2: ITable = {
            id: '2',
            name: 'name_2',
        };

        const tables: ITables = {
            tablesss:  [t1, t2]
    }

        return tables
    }

    const {isLoading: isLoadingGraph, isError: isErrorGraph, data: tablesList} = useTablesSetQuery()

    return (
        <>
            <AppHiderBar/>
            <AdminDrawer tablesss={tablesList??[]}/>
        </>
    )
}

export default App;
