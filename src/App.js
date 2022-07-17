import './App.css';
import React, {useState} from 'react';
import MenuHeader from "./components/Head/MenuHeader";
import Main from "./pages/Main";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <MenuHeader/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
