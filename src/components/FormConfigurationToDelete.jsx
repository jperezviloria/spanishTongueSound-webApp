import React from "react";

import { FormConfigurationStyle } from "../css/style";

export default class FormConfigurationToDelete extends React.Component {
    render() {
        return (
            <FormConfigurationStyle>
                <p>Form to Delete User</p>
                <form action="">
                    <input type="text" placeholder="username" />
                    <button type="submit">delete</button>
                </form>
            </FormConfigurationStyle>
        )
    }
}