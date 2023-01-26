import React from 'react';
import {AppHeaderBar} from "./component/AppHeaderBar";
import {AdminDrawer, ITable, ITables} from "./component/AdminDrawer";
import {useTablesSetQuery} from "./store/cfg/admin.api";
import {EditorTable} from "./component/EditorTable";
import {NewEditorTable} from "./component/NewEditorTable";




function App() {
    return (
        <>
            <AppHeaderBar/>
            <AdminDrawer />
            {/*<EditorTable/>*/}
            <NewEditorTable/>
        </>
    )
}

export default App;
