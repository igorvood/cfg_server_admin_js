import React from 'react';
import {AppHeaderBar} from "./component/AppHeaderBar";
import {AdminDrawer, ITable, ITables} from "./component/AdminDrawer";
import {useTablesSetQuery} from "./store/cfg/tracer.api";




function App() {
    const {isLoading: isLoadingTables, isError: isErrorTables, data: tablesList} = useTablesSetQuery()

    return (
        <>
            <AppHeaderBar/>
            <AdminDrawer tablesss={tablesList??[]}/>
        </>
    )
}

export default App;
