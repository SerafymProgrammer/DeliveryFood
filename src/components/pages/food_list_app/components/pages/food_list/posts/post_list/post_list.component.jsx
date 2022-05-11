import React from 'react';
import PostItemComponent from "../post_item/post_item.component";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import './post_list.styles.css';
import UiLoaderComponent from "../../../../../../../UI/ui_loader/ui_loader.component";

const PostListComponent = ({posts, title, remove_post, is_loading, is_error}) => {

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
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Posts not found
            </h1>
        )
    }

    return  (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
            {posts.map((item, index)=>{
                return (
                    <CSSTransition
                        key={item.id}
                        timeout={300}
                        classNames="post"

                    >
                    <PostItemComponent
                        remove_post={remove_post}
                        number={index+1}
                        post={item}
                        // key={index+item.id}
                    />
                    </CSSTransition>
                )

            })}
        </TransitionGroup>


        </div>
    );
};

export default PostListComponent;