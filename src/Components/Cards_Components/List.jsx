import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './css/List.scss'

const List = ({ data }) => {

    const [open, updateOpen] = useState(false);
    const show = () => {
        updateOpen(!open)
    }
    return (
        <>
            <div className="list_box">
                <NavLink to={data.path} className="nav_list" onClick={show}> {data.title}
                    <div className="arrow">
                        {
                            data.subMenu && open
                                ? data.down
                                : data.subMenu
                                    ? data.up
                                    : null
                        }
                    </div>
                </NavLink>
            </div>

            <div className="subMenu_box">
                {
                    data.subMenu && open
                        ? (
                            data.subMenu.map((items, index) => {
                                return (
                                    <>
                                        <NavLink to={items.path} className="subMenu" key={index}>
                                            {items.title}
                                        </NavLink>
                                    </>
                                )
                            })
                        )
                        : null
                }
            </div>
        </>
    )
}

export default List;
