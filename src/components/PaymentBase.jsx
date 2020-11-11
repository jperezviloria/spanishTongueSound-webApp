import React from "react";
import PaymentCard from "./PaymentCard";

import { PaymentBaseStyle } from "../css/style";
import Aos from "aos";


export default class PaymentBase extends React.Component {
    componentDidMount() {
        Aos.init({
            duration: 2000
        })
    }

    render(props) {
        return (
            <PaymentBaseStyle data-aos="zoom-out">
                <PaymentCard
                    level="Level 1"
                    price="$12"
                    description="Introduction/Basic level of Spanish"
                    paymentLink="https://www.paypal.com/myaccount/summary" />
                <PaymentCard
                    level="Level 2"
                    price="$12"
                    description="More in depth Spanish course"
                    paymentLink="https://www.paypal.com/myaccount/summary" />
                <PaymentCard
                    level="Level 3"
                    price="$12"
                    description="Advanced Spanish, conversational"
                    paymentLink="https://www.paypal.com/myaccount/summary" />

            </PaymentBaseStyle>
        )
    }
}