import React from 'react';
import cl from './pagination_pages.style.module.css';
import {usePagesArray} from "../../../hooks/use_pages/use_pages.hook";


const PaginationPagesComponent = ({total_pages, current_page, change_page}) => {
    let pages_array = usePagesArray(total_pages);
    return (
        <div className={cl.wrap_pages}>
            {
                pages_array.map(page_number=> {
                    let page_link_cls = page_number===current_page ? [cl.page_link, cl.current_page] : [cl.page_link];
                    return <span
                        key={'pg_num'+page_number}
                        onClick={()=>{change_page(page_number)}}
                        className={page_link_cls.join(' ')}>{page_number}</span>
                })
            }
        </div>
    );
};

export default PaginationPagesComponent;