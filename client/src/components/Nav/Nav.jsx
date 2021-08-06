import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Nav = () => {

    function loginNav () {
        if (Auth.loggedIn()) {
            return (
                <ul>
                    <li>
                        <Link to="">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li>
                        <Link to="">
                            SignUp
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Login
                        </Link>
                    </li>
                </ul>
            )
        }
    }

    return (
        <header>
            <h1>
                <Link to="/">
                    E.V.E.N.T.S.
                </Link>
            </h1>

            <nav>
                {loginNav()}
            </nav>
        </header>
    )
}

export default Nav;