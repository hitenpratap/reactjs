/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Props Example
class PropsApp extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <div>
                        <h1>{this.props.headerProp}</h1>
                        <h2>{this.props.contentProp}</h2>
                    </div>
                </p>
            </div>
        )
    }
}

PropsApp.defaultProps = {
    headerProp: "Header from props #1...",
    contentProp: "Content from props #1..."
};

export default PropsApp;