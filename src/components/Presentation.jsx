import React from "react";

import { PresentationStyle } from "../css/style";


export default class Presentation extends React.Component{

    render(){
        return(
            <PresentationStyle>
                <div>
                <img src="https://i.imgur.com/Yp0bAtn.png" alt=""/>
                </div>
                <div>
                <h1>ESLOGAN</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim alias eligendi repudiandae nobis natus, sed fugiat quisquam, velit autem odit ad. Error ut nemo commodi consequuntur quis tenetur asperiores veniam a veritatis voluptatibus omnis et impedit, dicta quo laudantium ea saepe delectus optio architecto? Odio, repellendus? Aperiam, cupiditate. Eos, quas voluptas! Totam dolorem eveniet similique debitis repellat sapiente enim dolores? Eos ad qui quo enim repellendus illo fuga sapiente tempora!</p>
                </div>
            </PresentationStyle>
        )
    }
}