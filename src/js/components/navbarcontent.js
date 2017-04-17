import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export default class NavbarContent extends React.Component {
    render() {
        return (
            <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li>
                            <NavLink exact activeClassName="active" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active" to="/About">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active" to="/Contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
        );
    }
}