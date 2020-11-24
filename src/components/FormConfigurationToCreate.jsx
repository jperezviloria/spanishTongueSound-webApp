import React from "react";

import { FormConfigurationStyle } from "../css/style";

export default class FormConfigurationToCreate extends React.Component {
    render() {
        return (
            <FormConfigurationStyle>
                <p>Form to Create User</p>
                <form action="">
                    <input type="text" placeholder="username" />
                    <input type="text" placeholder="password" />
                    <button type="submit">create</button>
                </form>
            </FormConfigurationStyle>
        )
    }
}