import React from 'react';
import classes from './ui_button.style.module.css'

const MyButtonComponent = ({children, ...props}) => {
    return (
        <button
            {...props}
            className={classes.my_btn}>
            {children}
        </button>
    );
};

export default MyButtonComponent;