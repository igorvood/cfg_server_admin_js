import React from 'react';
import {AppHeaderBar} from "./component/AppHeaderBar";
import {AdminDrawer} from "./component/AdminDrawer";
import {useTablesSetQuery} from "./store/cfg/admin.api";
import {EditorTable} from "./component/EditorTable";
import {NewEditorTable} from "./component/NewEditorTable";
import {PumlDiagram} from "./component/PumlDiagram";




function App() {
    return (
        <>
            <AppHeaderBar/>
            <AdminDrawer />
            {/*<EditorTable/>*/}
            {/*<NewEditorTable/>*/}
            <PumlDiagram/>
        </>
    )
}

export default App;
