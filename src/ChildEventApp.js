/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class ChildEventApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        };

        this.updateState = this.updateState.bind(this);
    };

    updateState() {
        this.setState({data: 'Data updated from the child component...'})
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
                        <Content myDataProp={this.state.data}
                                 updateStateProp={this.updateState}></Content>
                    </div>
                </p>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.updateStateProp}>CLICK</button>
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

export default ChildEventApp;

