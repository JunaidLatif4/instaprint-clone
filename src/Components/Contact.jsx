// Import Requried Components
import React, { useState } from "react";

import '../CSS/Contact.css';

const Contact = () => {

    const [data, updateData] = useState({
        fname: "",
        lname: "",
        email: "",
        mesg: ""
    })

    const enteringData = (data) => {
        const { value, name } = data.target

        updateData((previousData) => {
            return {
                ...previousData,
                [name]: value
            }
        })
    }


    const saveData = () => {

        console.log(data)

        let form = new FormData()

        for (var key in data) {
            form.append(key, data[key])
        }
    }





    return (
        <>
            <div className="cont_main_div">
                <div2 className="cont_middle_div">

                    <span className="cont_contact">CONTACT US</span>
                    <div3 className="cont_centre_div">
                        <span3 className="cont_span">
                            <span className="cont_header">FIRST NAME<span2> * </span2></span>
                            <input
                                className="cont_input"
                                type="text"
                                name="fname"
                                onChange={enteringData}
                                placeholder="Entre your FIRST NAME"
                            />
                        </span3>

                        <span3  className="cont_span">

                            <span className="cont_header">LAST NAME <span2> * </span2></span>

                            <input
                                className="cont_input"
                                type="text"
                                name="lname"
                                onChange={enteringData}
                                placeholder="Entre your LAST NAME"
                            />
                        </span3>

                        <span3 className="cont_span">
                            <span className="cont_header">EMAIL ADREESS <span2> * </span2></span>
                            <input
                                className="cont_input"
                                type="email"
                                name="email"
                                onChange={enteringData}
                                placeholder="Entre your Email"
                            />
                        </span3>
                    </div3>
                    <span3  className="cont_span">
                        <span className="cont_header">ENTRE YOUR MESSAGE <span2> * </span2></span> <br />
                        <textarea rows="14" cols="128"

                            placeholder="Entre your message"
                            name="mesg"
                            onChange={enteringData}
                        />
                    </span3>
                    <div3 className="cont_centre_div">
                        <button className="cont_btn" onClick={saveData}>SUBMIT</button>
                    </div3>
                    <div4 className="cont_last_div">
                        <div3 className="cont_centre_div">
                            <button className="cont_btn4">Zendesk</button>
                        </div3> 
                        <div3 className="cont_centre_div">
                            <button className="cont_btn4">03004050673</button>
                        </div3>
                         <div3 className="cont_centre_div">
                            <button className="cont_btn4">sales@intaprint.pk</button>
                        </div3>

                    </div4>



                </div2>
            </div>
        </>
    );
};

export default Contact;