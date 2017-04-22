/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class StatefullApp extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "Foo",
                    "age": "20"
                },

                {
                    "id": 2,
                    "name": "Bar",
                    "age": "30"
                },

                {
                    "id": 3,
                    "name": "Baz",
                    "age": "40"
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
                        <Header/>
                        <table>
                            <tbody>
                            {/*Notice that we are using key = {i} inside map() function.
                             This will help React to update only necessary elements
                             instead of re-rendering entire list when something change.
                             It is huge performance boost for larger number of dynamically created elements.*/}
                            {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                            </tbody>
                        </table>
                    </div>
                </p>
            </div>
        )
    }
}

class Header extends React.Component {
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

export default StatefullApp;
