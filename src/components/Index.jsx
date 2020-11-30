import React from "react";
import Miscellaneous from "./Miscellaneous";
import QA from "./Q&A"
import Pensum from "./Pensum";
import AboutUs from "./AboutUs";
import PaymentBase from "./PaymentBase"
import Presentation from "./Presentation";


import { IndexStyle } from "../css/style";

export default class Index extends React.Component {
    render() {
        return (
            <IndexStyle>
                <Presentation />
                <PaymentBase />
                <QA />
                <AboutUs />
                <Miscellaneous />
            </IndexStyle>
        )
    }
}