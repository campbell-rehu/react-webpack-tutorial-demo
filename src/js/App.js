import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';

import Routes from './components/routes';

class App extends React.Component {
    render() {
        return (
                <Router>
                    <div>
                        <Header />
                        <Routes />
                    </div>               
                </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));