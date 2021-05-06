import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

// CSS :
import "../CSS/Product.scss"

const Product = () => {

    const { pid } = useParams();
    const [product, updateProduct] = useState(null)

    useEffect(() => {
        const getData = async () => {
            await axios({
                method: "get",
                url: `http://127.0.0.1:8000/api/shop/${pid}`
            }).then((responce) => {
                console.log(responce.data)
                updateProduct(responce.data)
            })
        }
        getData()
    }, [])

    return (
        (product != null) ?
            <>

                <div className="product_container">
                    {/* <h2>Disclamer :</h2> */}

                    <div className="grid">
                        <div className="img">
                            <img src={product.img} alt="ERROR" />
                        </div>
                        <div className="data">
                            <div className="disclamer">
                                <b>Disclamer :</b> {product.detail}
                            </div>
                            <div className="name"> {product.title} </div>
                            <div className="detail">  </div>
                            <div className="price"> Price <br/> PKR. <span style={{ color: "rgb(237, 27, 36)" }}>{product.price}</span>   </div>
                            <div className="btn">
                                <button id="" onclick="">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            : null
    )
}

export default Product;
