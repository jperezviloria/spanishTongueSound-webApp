import React from "react";

import EmailPanel from "./EmailPanel";
import StudentsByLevel from "./StudentsByLevel";
import UsersConfigurationForm from "./UsersConfigurationForm";

import { AdminDashboardStyle } from "../css/style";

export default class AdminDashboard extends React.Component {


    render() {
        return (
            <AdminDashboardStyle>
                <div className="MailAndLevels">
                    <EmailPanel />
                    <StudentsByLevel />
                </div>
                
                <UsersConfigurationForm  />
            </AdminDashboardStyle>
        )
    }
}