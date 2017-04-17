import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">React/Webpack Tutorial Demo</a>
                </div>
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
                </div>
            </nav>
        );
    }
}

