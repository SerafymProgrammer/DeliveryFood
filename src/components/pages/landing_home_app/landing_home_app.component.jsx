import React from 'react';
import MyButtonComponent from "../../UI/ui_button/ui_button.component";
import {Link} from "react-router-dom";

const LandingHomeAppComponent = () => {
    return (
        <div>
            <MyButtonComponent>

                <Link to={'/food_list'}>
                <div >
                    To food list
                </div>
                </Link>
            </MyButtonComponent>
            
        </div>
    );
};

export default LandingHomeAppComponent;