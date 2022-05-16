import React from 'react';
import MyInputComponent from "../../../../../../../UI/ui_input/ui_input.component";
import MyButtonComponent from "../../../../../../../UI/ui_button/ui_button.component";
import {useState} from "react";

const PostFormComponent = (props) => {

    const [new_post_form, set_new_post_form] = useState({
        title: '',
        body: ''
    })

    const add_new_post = (e) => {
        e.preventDefault();
        const new_post = {
            ...new_post_form,
            id: Date.now(),
        }
        props.create_post(new_post)
        set_new_post_form({title: '', body: ''})
    }

    const handle_change_form = (e) => {
        e.preventDefault();

        set_new_post_form(
            {
                ...new_post_form,
                [e.target.name]: e.target.value
            })
    }


    return (
        <form>

            <MyInputComponent
                name={'title'}
                value={new_post_form.title}
                placeholder={'Post title'}
                onChange={handle_change_form}
            />
            <MyInputComponent
                name={'body'}
                value={new_post_form.body}
                placeholder={'Post description'}
                onChange={handle_change_form}
            />
            <MyButtonComponent
                onClick={add_new_post}
                disabled={false}>
                Create post
            </MyButtonComponent>
        </form>

    );
};

export default PostFormComponent;
