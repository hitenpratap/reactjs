/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class SetStateApp extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {
        var item = "setState...";
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({data: myArray})
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <div>
                        <button onClick = {this.setStateHandler}>SET STATE</button>
                        <h4>State Array: {this.state.data}</h4>
                    </div>
                </p>
            </div>
        )
    }
}

export default SetStateApp;