/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import logo from './logo.svg';
import './App.css';

class RouterApp extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <div>
                        <ul>
                            <li><Link to="home">Home</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>

                        {this.props.children}
                    </div>
                </p>
            </div>
        )
    }
}

export default RouterApp;


export class Home extends Component {
    render() {
        return (
            <h1>Home Page Content</h1>
        )
    }
}


export class About extends Component {
    render() {
        return (
            <h1>About Page Content</h1>
        )
    }
}


export class Contact extends Component {
    render() {
        return (
            <h1>Contact Page Content</h1>
        )
    }
}