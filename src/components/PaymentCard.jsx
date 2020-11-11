import React from "react";
import { PaymentCardStyle } from "../css/style";
import Aos from "aos";

export default class PaymentCart extends React.Component{
    componentDidMount() {
        Aos.init({
            duration: 2000,
            once: true,
            //mirror: true
        })
    }

    render(){
        return (
            <PaymentCardStyle>
                <p className="level">{this.props.level}</p>
                <p className="price">{this.props.price}</p>
                <p className="description">{this.props.description}</p>
                <a href={this.props.paymentLink} target="_blank" rel="noopener noreferrer" > 
                <button type="submit">Inscription</button>
                </a>
            </PaymentCardStyle>
        )
    }
}