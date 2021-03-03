import React from 'react'

import List from './List'
import Cards from './Cards'

import './css/AllCards.scss'

import { data } from './ListData';
import  CardData  from './CardData';

const AllCards = () => {
    return (
        <div className="card_container">
            <div className="list_container">
                <div className="list_catg">CATEGORIES</div>
                {
                    data.map((item, index) => {
                        return (
                            <>
                                <List data={item} key={index} />
                            </>
                        )
                    })
                }
            </div>

            <div className="card_box">
                {
                    CardData.map((item , index)=>{
                        return(
                            <>
                                <Cards data={item} />
                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AllCards;
