import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import NavbarContent from './navbarcontent';

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
                    <NavLink class="navbar navbar-brand" to="/">React/Webpack Tutorial Demo</NavLink>
                </div>
                <NavbarContent />
                </div>
            </nav>
        );
    }
}

