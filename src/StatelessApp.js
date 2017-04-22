/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class StatelessApp extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <div>
                        <Header/>
                        <Content/>
                    </div>
                </p>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        )
    }
}

export default StatelessApp;
