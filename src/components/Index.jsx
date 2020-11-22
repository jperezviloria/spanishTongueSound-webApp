import React from "react";
import Miscellaneous from "./Miscellaneous";
import QA from "./Q&A"
import Pensum from "./Pensum";
import AboutUs from "./AboutUs";
import PaymentBase from "./PaymentBase"
import AdminDashboard from "./AdminDashboard";

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <AdminDashboard/>
                <Pensum />
                <PaymentBase />
                <QA />
                <AboutUs />
                <Miscellaneous />
            </div>
        )
    }
}