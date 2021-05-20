import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

// CSS :
import "../CSS/Product.scss"

const Product = () => {

    const { pid } = useParams();
    const [product, updateProduct] = useState(null)

    const cart =

        useEffect(() => {
            const getData = async () => {
                await axios({
                    method: "get",
                    url: `http://127.0.0.1:8000/api/shop/${pid}`
                }).then((responce) => {
                    console.log("The PID = ", responce.data)
                    updateProduct(responce.data)
                })
            }
            getData()


        }, [])

    if (localStorage.getItem('cart') == null) {
        var productCart = {};
    } else {
        productCart = JSON.parse(localStorage.getItem('cart'));
    }

    const addCart = (event) => {
        console.log("Clicked")
        var productID = event.target.id.toString();
        var productName = event.target.name.toString();
        var productPrice = event.target.value.toString();
        console.log(typeof productID)
        console.log(typeof productName)
        console.log(typeof productPrice)

        if(productCart[productID] != undefined){
            productCart[productID][0] = productCart[productID][0] +1
        } else{
            productCart[productID] = [1 , productName , productPrice]
        }
        localStorage.setItem('cart', JSON.stringify(productCart))
        console.log("The Cart = ", productCart)



    }

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
                            <div className="price"> Price <br /> PKR. <span style={{ color: "rgb(237, 27, 36)" }}>{product.price}</span>   </div>
                            <div className="btn">
                                <button name={product.title} value={product.price} id={product.id} onClick={addCart}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            : null
    )
}

export default Product;
