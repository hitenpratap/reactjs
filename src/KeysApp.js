/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class KeysApp extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    component: 'First...',
                    id: 1
                },

                {
                    component: 'Second...',
                    id: 2
                },

                {
                    component: 'Third...',
                    id: 3
                }
            ]
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
                        <div>
                            {this.state.data.map((dynamicComponent, i) => <Content
                                key={i} componentData={dynamicComponent}/>)}
                        </div>
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
                <div>{this.props.componentData.component}</div>
                <div>{this.props.componentData.id}</div>
            </div>
        );
    }
}

export default KeysApp;