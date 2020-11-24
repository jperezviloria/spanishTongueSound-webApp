import React from "react";

import { FormConfigurationStyle } from "../css/style";

export default class FormConfigurationToFind extends React.Component {
    render() {
        return (
            <FormConfigurationStyle>
                <p>Form to Find User</p>
                <form action="">
                    <input type="text" placeholder="username" />
                    <button type="submit">find</button>
                </form>
            </FormConfigurationStyle>
        )
    }
}