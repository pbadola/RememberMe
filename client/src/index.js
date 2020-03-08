import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import FindConnection from './components/FindConnection';
// import AddConnection from './components/AddConnection';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById('root'));

// const rootElement = document.getElementById('root');
// ReactDOM.render(
//     <BrowserRouter>
//      <Switch>
//       <Route exact path="/addConnection" component={FindConnection} />
//       <Route path="/findConnection" component={AddConnection} />
//     </Switch>
//     </BrowserRouter>,
//     rootElement
//   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
