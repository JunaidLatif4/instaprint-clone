import React, { useState } from "react";

import '../CSS/Login.css'; 

const Login = () => {

  const [data, updateData] = useState({
    email: "",
    pass: ""
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
        <div2 className ="log_centre_div">
          <span className="log_login">Log in</span>
          <p1 className="log_para1">Enter you details below</p1>

          <button className="log_btn2">Continue with Facebook</button>
          <button className="log_btn1">Continue with Google</button>

          <span className="log_header">EMAIL ADREESS <span2> * </span2></span>
          <input
            className="log_input"
            type="email"
            name="email"
            onChange={enteringData}
            placeholder="Entre your Email"
          />

          <span className="log_header">PASSWORD <span2> * </span2></span>

          <input
              className="log_input"
            type="password"
            name="pass"
            onChange={enteringData}
            placeholder="Entre your password"
          />
          <p className="log_para2">Forgot Your Password?</p>
          <p className="log_para2">Do not have an account? Create one</p>
          <button className="log_btn1" onClick={saveData}>LOG IN</button>

        </div2>
    </>
  );
};

export default Login;
