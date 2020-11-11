import React from "react";
import { HeaderBase, HeaderSuperior, HeaderInferior } from "../css/style";


function Header(){
    return (
        <HeaderBase>
            <HeaderSuperior>
                <img src="https://parabuenosaires.com/wp-content/uploads/2014/04/P1040029.jpg" alt=""/>
            </HeaderSuperior>
            <HeaderInferior>
                <div className = "headerLogo">
                    <img src="https://i.imgur.com/Yp0bAtn.png" alt=""/>
                </div>
                <div className = "headerLinks">
                    <a href="" >Index</a>
                    <a href="" >Miscellaneous</a>
                    <a href="" >Login</a>
                    <a href="" >Pensum</a>
                    <a href="" >Q&A</a>
                    <a href="" >Admin</a>
                </div>
            </HeaderInferior>
        </HeaderBase>
    )
}

export default Header;