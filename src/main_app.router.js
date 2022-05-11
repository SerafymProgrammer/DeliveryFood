import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import FoodListAppComponent from "./components/pages/food_list_app/food_list_app.component";
import DishComponent from "./components/pages/food_list_app/components/pages/dish/dish.component";
import LandingHomeAppComponent from "./components/pages/landing_home_app/landing_home_app.component";


const MainAppRouter = (props) => {
    console.log('hahaha')
    return (
        <Routes>
            <Route path="/home" element={<LandingHomeAppComponent/>} />
            <Route path="/food_list" element={<FoodListAppComponent/>} >
                <Route path=":dish_id" element={<DishComponent/>} />
            </Route>
            <Route
                path="*"
                element={<Navigate to="/home" replace />}
            />
        </Routes>
    );
};

export default MainAppRouter;