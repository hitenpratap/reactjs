/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// State Example
class StatefulPropsApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header from state #1...",
            "content": "Content from state #1..."
        }
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
                        <h1>{this.state.header}</h1>
                        <h2>{this.state.content}</h2>
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
        );
    }
}

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default StatefulPropsApp;