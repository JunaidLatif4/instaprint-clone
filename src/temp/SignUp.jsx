import axios from "axios";
import React, { useState } from "react";
import '../CSS/SignUp.css';


const SignUp = () => {

  const [data, updateData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    cpass: ""
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
    const url = "http://localhost:80/Instaprint_backend/signup.php"

    let form = new FormData()

    for (var key in data) {
      form.append(key, data[key])
    }

    axios.post(url,form)
    .then((res)=>{
      console.log("The Reponce = " , res)
    })
    .catch((err)=>{
      console.log("The Error = " , err)
    })
  }


  return (
    <>
        <div2 className="sign_centre_div">
          <span1 className="sign_login">SIGN UP</span1>
          <p1 className="sign_para">Create a new account</p1>

          <span className="sign_head">FIRST NAME<span2> * </span2></span>
          <input
            className="sign_input"
            type="text"
            name="fname"
            onChange={enteringData}
            placeholder="Entre your FIRST NAME"
          />


          <span className="sign_head">LAST NAME <span2> * </span2></span>

          <input
           className="sign_input"
            type="text"
            name="lname"
            onChange={enteringData}
            placeholder="Entre your LAST NAME"
          />

          <span className="sign_head">EMAIL ADREESS <span2> * </span2></span>
          <input
           className="sign_input"
            type="email"
            name="email"
            onChange={enteringData}
            placeholder="Entre your Email"
          />


          <span className="sign_head">PASSWORD <span2> * </span2></span>

          <input
           className="sign_input"
            type="password"
            name="pass"
            onChange={enteringData}
            placeholder="Entre your password"
          />

          <p1 className="sign_para">Password Strength: No Password</p1>


          <span className="sign_head"> CONFIRM PASSWORD <span2> * </span2></span>

          <input
           className="sign_input"
            type="password"
            name="cpass"
            onChange={enteringData}
            placeholder="Plz confirm your password"
          />

          <div4><input className="sign_check" type="checkbox" />  <p1 className="sign_para">SIGN UP FOR NEWSLATTER</p1></div4>
          <button className="sign_btn" onClick={saveData}>SIGN UP</button>

        </div2>
    </>
  );
};

export default SignUp;