import React from 'react';
import classes from './divider.style.module.css'

const DividerComponent = (props) => {
    const {
        thickness='2px',
        direction='horizontal',
        custom_style={},
        color = '#134c6b',
        ...restProps
    } = props;
    let is_hor = direction==='horizontal';
    return (
        <div
            style={{
                background: color,
                [is_hor? 'height' : 'width']: thickness,
                ...custom_style
            }}
            className={
                is_hor? classes.horizontal_divider
                : classes.vertical_divider
            }
        >

        </div>
    );
};

export default DividerComponent;