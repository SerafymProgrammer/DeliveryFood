import React, {useState} from 'react';
import cl from './main_header.style.module.css'
import {Link} from "react-router-dom";
import {route_links} from "./main_header.consts";

const MainHeaderComponent = () => {
    const [curr_path, set_curr_path] = useState('home')
    return (
        <div className={cl.wrap_header}>
            <div className={cl.wrap_logo}>

            </div>

            <div className={cl.wrap_menu}>

                {
                    route_links.map(route=>{
                        let is_current = window.location.path ===route.link
                        let cls_link =  is_current ? [cl.menu_item_link, cl.current ] : [cl.menu_item_link]
                        return (
                            <div key={route.id}  className={cl.wrap_menu_item} >
                                <Link style={{ textDecoration: 'none' }}  to={route.link}>
                                    <span className={cls_link.join(' ')}>
                                    {route.name}
                                    </span>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default MainHeaderComponent;