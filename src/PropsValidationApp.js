/**
 * Created by hitenpratap on 22/04/17.
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class PropsValidationApp extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <div>
                        <h3>Array: {this.props.propArray}</h3>
                        <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                        <h3>Func: {this.props.propFunc(3)}</h3>
                        <h3>Number: {this.props.propNumber}</h3>
                        <h3>String: {this.props.propString}</h3>
                        <h3>Object: {this.props.propObject.objectName1}</h3>
                        <h3>Object: {this.props.propObject.objectName2}</h3>
                        <h3>Object: {this.props.propObject.objectName3}</h3>
                    </div>
                </p>
            </div>
        )
    }
}

PropsValidationApp.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propFunc: React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object
};

PropsValidationApp.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) {
        return e
    },
    propNumber: 1,
    propString: "String value...",

    propObject: {
        objectName1: "objectValue1",
        objectName2: "objectValue2",
        objectName3: "objectValue3"
    }
};

export default PropsValidationApp;