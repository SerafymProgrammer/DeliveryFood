import React from 'react';
import classes from './ui_modal.style.module.css';



const UiModalComponent = ({children, visible, set_visible}) => {
    const root_classes = [classes.modal]

    if (visible) {
        root_classes.push(classes.active)
    }

    return (
        <div
            onClick={()=>set_visible(false)}
            className={root_classes.join(' ')}>
            <div
                className={classes.modal_content}
                onClick={(e)=>{
                    e.stopPropagation()
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default UiModalComponent;