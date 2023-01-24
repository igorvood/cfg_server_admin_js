import React from 'react';
import {AppHeaderBar} from "./component/AppHeaderBar";
import {AdminDrawer, ITable, ITables} from "./component/AdminDrawer";
import {useTablesSetQuery} from "./store/cfg/tracer.api";




function App() {
    return (
        <>
            <AppHeaderBar/>
            <AdminDrawer />
        </>
    )
}

export default App;
