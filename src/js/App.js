import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={ Home } />
                    <Route path="/About" component={ About } />
                    <Route path="/Contact" component={ Contact } />                    
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));