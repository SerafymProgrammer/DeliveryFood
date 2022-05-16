import React from 'react';
import MyButtonComponent from "../../../../../../../UI/ui_button/ui_button.component";

const PostItemComponent = (props) => {
    const {id, title, body } = props.post;
    return (
        <div className={'post'}>
            <div className={'post_content'}>
                <strong>{props.number}. {title}</strong>
                <div>
                    {body}
                </div>

            </div>
            <div className={'post_btns'}>
                <MyButtonComponent onClick={()=>props.remove_post(props.post)}>delete</MyButtonComponent>
            </div>
        </div>
    );
};

export default PostItemComponent;