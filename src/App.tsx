import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Menu} from "./menu";
import {CryptoTable} from "./crypto-table";
import {Balance} from "./balance";

const App=()=> {
    return(
    <BrowserRouter basename={'/'}>
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/crypto" element={ <CryptoTable/>}/>
            <Route path="/balance" element={<Balance/>}/>
        </Routes>
    </BrowserRouter>
    )
};

export default App;

