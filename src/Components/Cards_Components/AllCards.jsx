import React , {useEffect, useState} from 'react'
import axios from 'axios';

import List from './List'
import Cards from './Cards'

import './css/AllCards.scss'

import { data } from './ListData';
import  CardData  from './CardData';

const AllCards = () => {
    const [product , UpdateProduct] = useState(null)
    useEffect(() => {
        const getData = async ()=>{
            axios({
                method : "get",
                url : "http://127.0.0.1:8000/api/shop/"

            }).then((responce)=>{
                UpdateProduct(responce.data.results)
            })
        }
        getData()
    }, [])

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
                    (product != null) ? 
                    product.map((item , index)=>{
                        return(
                            <>
                                <Cards data={item} />
                            </>
                        )
                    })
                    : null
                }
            </div>
        </div>
    )
}

export default AllCards;
