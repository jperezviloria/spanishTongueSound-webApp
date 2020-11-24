import React from "react";
import {LoginBase} from "../css/style";


function Login(){
    return (
        <LoginBase>
            <div>
            <p>Login</p>
            </div>
            <div class = "LoginInput" >
            <input type="text" placeholder = "username"/>
            <input type="text" placeholder = "password"/>

            </div>
            <div>
                <a href="/admin">

                <button type="submit">Login</button>
                </a>
            </div>
        </LoginBase>
    )
}

export default Login;