import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

export default class Routes extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/About" component={ About } />
                    <Route path="/Contact" component={ Contact } />
                    <Route render={() => { return (<h1>Page Not Found</h1>);}} />
                </Switch>
            </div>
        );
    }
}