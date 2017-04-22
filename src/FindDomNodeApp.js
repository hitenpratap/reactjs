/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class FindDomNodeApp extends Component {
    constructor() {
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };

    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'blue';
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <div>
                        <button onClick={this.findDomNodeHandler}>FIND DOME NODE</button>
                        <div id="myDiv">NODE</div>
                    </div>
                </p>
            </div>
        )
    }
}

export default FindDomNodeApp;