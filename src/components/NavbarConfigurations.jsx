import React from "react";

import { NavbarConfigurationStyle } from "../css/style";

export default class NavbarConfiguration extends React.Component{
    render(){
        return (
            <NavbarConfigurationStyle>
                <a href="/admin">Create</a>
                <a href="/admin/findbyname">Find</a>
                <a href="/admin/deleteuser">Delete</a>
            </NavbarConfigurationStyle>
        )
    }
}