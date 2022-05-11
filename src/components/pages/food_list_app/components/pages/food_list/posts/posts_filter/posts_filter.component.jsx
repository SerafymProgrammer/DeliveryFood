import React from 'react';
import MyInputComponent from "../../../../../../../UI/ui_input/ui_input.component";
import MySelectComponent from "../../../../../../../UI/ui_select/ui_select.component";

const PostsFilterComponent = ({filter, set_filter}) => {
    return (
        <div>
            <MyInputComponent
                value={filter.query}
                onChange={e=>set_filter({...filter, query: e.target.value})}
                placeholder={'Search...'}

            />
            <MySelectComponent
                value={filter.sort}
                on_change={new_sort=>set_filter({...filter, sort: new_sort})}
                default_value={'sorting'}
                options={[
                    {
                        value: 'title',
                        name: 'By title'
                    },
                    {
                        value: 'body',
                        name: 'By description'
                    }

                ]}
            />
        </div>

    );
};

export default PostsFilterComponent;