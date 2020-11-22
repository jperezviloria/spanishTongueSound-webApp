import React from "react";

import EmailPanel from "./EmailPanel";
import StudentsByLevel from "./StudentsByLevel";
import UsersConfigurationForm from "./UsersConfigurationForm";

export default class AdminDashboard extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <EmailPanel />
                    <StudentsByLevel />
                </div>
                
                <UsersConfigurationForm/>
            </div>
        )
    }
}