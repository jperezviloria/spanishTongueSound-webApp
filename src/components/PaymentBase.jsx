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
            <PaymentBaseStyle data-aos="zoom-out" id="price">
                <PaymentCard
                    level="basic"
                    price="20"
                    description="Teaching the first topics to know Spanish"
                    paymentLink="https://www.paypal.com/myaccount/summary" />
                <PaymentCard
                    level="bussines"
                    price="50"
                    description="More videos to learn Spanish"
                    paymentLink="https://www.paypal.com/myaccount/summary" />
                <PaymentCard
                    level="deluxe"
                    price="60"
                    description="Deluxe course with every documentations and videos"
                    paymentLink="https://www.paypal.com/myaccount/summary" />

            </PaymentBaseStyle>
        )
    }
}