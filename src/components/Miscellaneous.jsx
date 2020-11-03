import React from "react";
import { MiscellaneousBase } from "../css/style";


function Miscellaneous(){
    return (
        <MiscellaneousBase>
            <div className = "details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ipsa ratione! Perferendis, consectetur magni? Repudiandae culpa enim laborum nisi unde accusamus et inventore.
            </div>
            <div className = "inputInformation">
                <input type="text" placeholder = "name"/>
                <input type="mail" placeholder = "email"/>
                <input type="number" placeholder = "phone"/>
                <textarea name="" id="" cols="30" rows="5" placeholder = "how may i help you"></textarea>
                <button type="submit">Send</button>
            </div>
        </MiscellaneousBase>
    )
}


export default Miscellaneous;