import React from 'react';
import './food_list_app.style.css'
import FoodListPageComponent from "./components/pages/food_list/food_list_page.component";


const FoodListAppComponent = (props) => {

    return (
        <div className={'food_list_page_wrap'}>
            <FoodListPageComponent/>
        </div>
    );
};

export default FoodListAppComponent;