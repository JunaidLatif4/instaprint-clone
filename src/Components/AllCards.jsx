import React from 'react';

import Img from '../img/5goo.jpg';

// CSS:
import '../CSS/AllCards.scss';

const AllCards = () => {

    const arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    console.log(arr.length)


    return (
        <div className="AllCards_container">
            <div className="Allcards_box">
                <div className="AllCards_list">CARD LIST</div>
                <div className="AllCards">
                    {
                        arr.map((v ,i) => {
                            return (
                                <>
                                    <div className="data">
                                        <img src={Img} alt="ERROR" />
                                        <p>
                                            <strong>Starting from PKR 3.00</strong> <br />
                                            Finish Options Available
                                        </p>
                                    </div>
                                </>
                            )
                        })
                    }



                </div>
            </div>
        </div>
    )
}

export default AllCards;
