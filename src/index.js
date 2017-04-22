import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import StatelessApp from './StatelessApp';
import StatefullApp from './StatefullApp';
import StatefulPropsApp from './StatefulPropsApp';
import PropsApp from './PropsApp';
import StatePropsApp from './StatePropsApp';
import PropsValidationApp from './PropsValidationApp';
import SetStateApp from './SetStateApp';
import ForceUpdateApp from './ForceUpdateApp';
import FindDomNodeApp from './FindDomNodeApp';
import LifeCycleApp from './LifeCycleApp';
import FormApp from './FormApp';
import ChildEventApp from './ChildEventApp';
import RefsApp from './RefsApp';
import KeysApp from './KeysApp';
import RouterApp from './RouterApp';
import {Home, About, Contact} from './RouterApp';
import './index.css';

// ReactDOM.render(
//     <ChildEventApp />,
//     document.getElementById('root')
// );

// ReactDOM.render(<PropsApp headerProp="Header from props..." contentProp="Content
//    from props..."/>, document.getElementById('root'));

//LifeCycle Example
ReactDOM.render(<LifeCycleApp/>, document.getElementById('root'));
// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));
// }, 10000);

//Router Example
// ReactDOM.render((
//     <Router history={browserHistory}>
//         <Route path="/" component={RouterApp}>
//             <IndexRoute component={Contact}/>
//             <Route path="home" component={Home}/>
//             <Route path="about" component={About}/>
//             <Route path="contact" component={Contact}/>
//         </Route>
//     </Router>
// ), document.getElementById('root'));
