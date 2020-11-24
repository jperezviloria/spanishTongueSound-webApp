import React from "react";

import NavbarConfiguration from "./NavbarConfigurations";
import FormConfigurationToCreate from "./FormConfigurationToCreate";
import FormConfigurationToDelete from "./FormConfigurationToDelete";
import FormConfigurationToFind from "./FormConfigurationToFind";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { } from "../css/style";


export default class StudentsByLevel extends React.Component {


    render() {
        return (
            <div className="UsersConfiguration">
                <Router>
                    <NavbarConfiguration/>
                    <Switch>
                        <Route path="/admin" exact component={FormConfigurationToCreate} />
                        <Route path="/admin/findbyname" component={FormConfigurationToFind} />
                        <Route path="/admin/deleteuser" component={FormConfigurationToDelete} />

                    </Switch>
                </Router>
                
            </div>
        )
    }
}