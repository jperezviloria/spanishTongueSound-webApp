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
                <button type="submit">Login</button>
            </div>
        </LoginBase>
    )
}

export default Login;