import React from 'react';
import {AppHeaderBar} from "./component/AppHeaderBar";
import {AdminDrawer, ITable, ITables} from "./component/AdminDrawer";
import {useTablesSetQuery} from "./store/cfg/tracer.api";
import {EditorTable} from "./component/EditorTable";




function App() {
    return (
        <>
            <AppHeaderBar/>
            <AdminDrawer />
            <EditorTable/>
        </>
    )
}

export default App;
