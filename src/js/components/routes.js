import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

export default class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ Home } />
                <Route path="/About" component={ About } />
                <Route path="/Contact" component={ Contact } />
            </div>
        );
    }
}