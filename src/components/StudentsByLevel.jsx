import React from "react";

import { StudentByLevelStyle } from "../css/style";



export default class StudentsByLevel extends React.Component {


    render() {
        return (
            <StudentByLevelStyle>
                <div className="divisionStudentByLevel">
                    <h4>Level 1</h4>
                    <form>
                        <p>Julio Perez</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>Andres Escobar</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>Gabriel Garcia</p>
                        <button type="submit">ver</button>
                    </form>
                </div>
                <div className="divisionStudentByLevel">
                    <h4>Level 2</h4>
                    <form>
                        <p>Lionel Messi</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>John Mayer</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>Milton Smith</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>Maria Viloria</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>Jessica Torres</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>Lionel Messi</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>John Mayer</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>Milton Smith</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>Maria Viloria</p>
                        <button type="submit">ver</button>
                    </form>
                    <form>
                        <p>Jessica Torres</p>
                        <button type="submit">ver</button>
                    </form>
                    
                </div>
            </StudentByLevelStyle>
        )
    }
}