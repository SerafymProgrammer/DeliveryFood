import React from 'react';
import {useEffect, useState} from "react";
import {useFetchHook} from "../../../../../../hooks/use_fetch/use_fetch.hook";
import PostService from "./dishes/dish_service/post_service.service";
import {get_page_count} from "../../../../../../utils/pagination";
import {usePosts} from "../../../../../../hooks/use_posts/use_posts.hook";
import MyButtonComponent from "../../../../../UI/ui_button/ui_button.component";
import UiModalComponent from "../../../../../UI/ui_modal/ui_modal.component";
import PostFormComponent from "./dishes/dish_form/post_form.component";
import DividerComponent from "../../../../../UI/ui_divider/divider.component";
import PostsFilterComponent from "./dishes/dishes_filter/posts_filter.component";
import PostListComponent from "./dishes/dish_list/dish_list.component";
import PaginationPagesComponent from "../../../../../UI/pagination/pagination_pages.component";
import cl from './food_list_page.style.module.css'


const FoodListPageComponent = () => {


    const [posts, set_posts] = useState([
    ])

    const [show_modal, set_show_modal] = useState(false)

    const [total_pages, set_total_pages] = useState(0)
    const [limit, set_limit] = useState(10)
    const [page, set_page] = useState()

    const [filters, set_filters] = useState({
        sort: '',
        query: ''
    })




    const [fetching_posts, is_posts_loading, error_posts] = useFetchHook(async ()=>{
        const response = await PostService.getAll(limit, page);
        set_posts(response.data)

        let total_count = response.headers['x-total-count'];
        set_total_pages(get_page_count(total_count, limit))
    })


    useEffect(()=>{
        fetching_posts(limit, page)
    }, [])


    const searched_and_sorted_posts = usePosts(posts, filters.sort, filters.query)




    const create_post = (new_post) => {
        set_posts([...posts, new_post])
        set_show_modal(false)
    }

    const remove_post = (post) => {
        set_posts((posts) => posts.filter(item => item.id !== post.id))
    }

    const change_page = (page) => {
        set_page(page)
        fetching_posts(limit, page)
    }




    return (

        <div className={cl.food_list_page_block}>
            <div style={{marginTop: 30, display: 'flex', justifyContent: 'space-between'}}>
                <MyButtonComponent
                    onClick={()=>set_show_modal(true)}
                >
                    Create post
                </MyButtonComponent>
                {/*<MyButtonComponent*/}
                {/*    onClick={fetching_posts}*/}
                {/*>*/}
                {/*    Get dishes*/}
                {/*</MyButtonComponent>*/}
            </div>

            <UiModalComponent
                set_visible={set_show_modal}
                visible={show_modal}>
                <PostFormComponent create_post={create_post}/>
            </UiModalComponent>
            {/*<DividerComponent />*/}
            <PostsFilterComponent
                filter={filters}
                set_filter={set_filters}
            />
            <PostListComponent
                is_error={error_posts}
                is_loading={is_posts_loading}
                dishes={searched_and_sorted_posts}
                remove_post={remove_post}
                // title={'List of the dishes'}
            />

            <PaginationPagesComponent
                total_pages={total_pages}
                current_page={page}
                change_page={change_page}/>

        </div>
    );
};

export default FoodListPageComponent;