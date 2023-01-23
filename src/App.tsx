import React from 'react';
import {Route, Routes, useRoutes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {AdminPage} from "./pages/AdminPage";
import {Navigation} from "./component/Navigation";

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/", element: < AdminPage/>},
        {path: "favourites", element: <HomePage/>},
        // ...
    ]);
    return routes;
};

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<AdminPage/>}/>
                <Route path="/favourites" element={<HomePage/>}/>
            </Routes>
        </>
    )
}

export default App;
