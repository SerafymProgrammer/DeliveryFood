import React from 'react';
import classes from './ui_select.style.module.css'

const MySelectComponent = ({options, default_value, value, on_change}) => {
    return (
        <select
            className={classes.my_select}
            value={value}
            onChange={(e)=>{on_change(e.target.value)}}
        >
            <option disabled={true} value={''}>{default_value}</option>
            {
                options.map((option)=>{
                    return (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    )
                })
            }
        </select>
    );
};

export default MySelectComponent;