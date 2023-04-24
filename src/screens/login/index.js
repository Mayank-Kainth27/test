import React from "react";
import "./login.css";
import image from '../../assets/image-login.png';

const Login = () => {
    return (
        <div id="parent">
            <div id="child-left">
                <img alt="logo" src={image}/>
                <h2>Image here</h2>
                <p>this is a demo text sample and this is the recording of the test where kdvv</p>
            </div>
            <div id="child-right">
                <div className="content">
                    <h2>Login welcome</h2>
                    <p>About company</p>
                    <input type={"text"} />
                    <input type={"text"} />
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;