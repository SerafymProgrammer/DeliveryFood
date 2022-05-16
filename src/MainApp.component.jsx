import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainAppRouter from "./main_app.router";
import MainHeaderComponent from "./components/header/main_header.component";
import './main_styles.css';

const MainAppComponent = () => {
    return (
        <BrowserRouter>

                <MainAppRouter/>
            </BrowserRouter>
    );
};

export default MainAppComponent;

