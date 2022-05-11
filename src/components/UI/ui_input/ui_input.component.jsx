import React from 'react';
import classes from './ui_input.style.module.css'

const MyInputComponent = React.forwardRef((props, ref) => {

    return (
        <input className={classes.my_input} {...props} ref={ref}/>
    );
});

export default MyInputComponent;