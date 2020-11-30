import React from "react";
import { MiscellaneousBase } from "../css/style";


export default class Miscellaneous extends React.Component{
    render(){

    
    return (
        <MiscellaneousBase id="contactform">
            <div className = "details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ipsa ratione! Perferendis, consectetur magni? Repudiandae culpa enim laborum nisi unde accusamus et inventore.
            </div>
            <div className = "inputInformation">
                <input type="text" placeholder = "name"/>
                <input type="text" placeholder = "age"/>
                <select name="" id="">
                    <option value="">Female</option>
                    <option value="">Male</option>
                </select>
                <input type="mail" placeholder = "email"/>
                <input type="number" placeholder = "phone"/>
                <select name="" id="">
                    <option value="">United States</option>
                    <option value="">United Kinkdows</option>
                    <option value="">Canada</option>
                    <option value="">Others</option>
                </select>
                <textarea name="" id="" cols="30" rows="5" placeholder = "how may i help you"></textarea>
                <button type="submit">Send</button>
            </div>
        </MiscellaneousBase>
    )
}
}

