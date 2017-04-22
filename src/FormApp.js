/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class FormApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        };

        this.updateState = this.updateState.bind(this);

    };

    updateState(e) {
        this.setState({data: e.target.value});
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
                        <input type="text" value={this.state.data}
                               onChange={this.updateState}/>
                        <h4>{this.state.data}</h4>
                    </div>
                </p>
            </div>
        )
    }
}

export default FormApp;