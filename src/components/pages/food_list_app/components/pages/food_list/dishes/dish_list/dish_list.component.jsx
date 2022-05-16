import React, {useRef} from 'react';
import PostItemComponent from "../dish_item/dish_item.component";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import './post_list.styles.css';
import UiLoaderComponent from "../../../../../../../UI/ui_loader/ui_loader.component";
import useWindowSize from "../../../../../../../../hooks/use_window_size/use_window_size.hook";
import useMaxHeightContainer from "../../../../../../../../hooks/use_maxheight_container/use_maxheight_container.hook";
import Scrollbar from "../../../../../../../UI/ui_scrollbar/ui_scrollbar.component";

const DishesListComponent = ({dishes, title, remove_dish, is_loading, is_error}) => {

    const ref_list_container = useRef(null);
    const list_container_max_height = useMaxHeightContainer(ref_list_container)

    if (is_loading) {
        return (
            <UiLoaderComponent/>
        )
    }


    if (is_error) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Bad request
            </h1>
        )
    }
    if (!dishes.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Dishes not found
            </h1>
        )
    }

    return  (
        <div
            ref={ref_list_container}
            className={'dishes_list_wrap'}>
            {
                title ?
                <h1 style={{textAlign: 'center'}}>{title}</h1>
                    : null
            }
            <Scrollbar>
            <TransitionGroup

                style={{maxHeight: list_container_max_height}}
                className={'dishes_list_block'}>

            {dishes.map((dish, index)=>{
                return (
                    <CSSTransition
                        key={dish.id}
                        timeout={300}
                        classNames="post"
                    >
                    <PostItemComponent
                        remove_post={remove_dish}
                        number={index+1}
                        post={dish}
                        // key={index+item.id}
                    />
                    </CSSTransition>
                )

            })}
        </TransitionGroup>
            </Scrollbar>

        </div>
    );
};

export default DishesListComponent;