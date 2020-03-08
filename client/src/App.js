import React, {useState, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import PersonInput from './components/PersonInput';
import axios from 'axios';
import PersonListAll from './components/PersonList';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import FindConnection from './components/FindConnection';
import AddConnection from './components/AddConnection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      persons: []
    };
  }

  // componentDidMount() {
  //   this.callBackendAPI()    
  // }

  // callBackendAPI = () => {
  //   axios.get('/persons')   
  //           .then( res => {
  //               this.setState({persons: res.data.persons});
  //           })
  //           .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <PersonList dataFromParent = {this.state.persons}/> */}
          <div className="buttons">
            <Link to="/addConnection">
              <button type="button" style={{backgroundColor: "#512617"}}  class="btn btn-lg">
                <div style={{color: "#FFFFFF"}}>Add a new connection</div>
              </button>
            </Link>
            <Link to="/findConnection">
              <button type="button" style={{backgroundColor: "#512617"}} class="btn btn-lg">
                <div style={{color: "#FFFFFF"}}>Find a connection</div>
              </button>
            </Link>
          </div>
          <Switch>
            <Route exact path="/addConnection" component={AddConnection} />
            <Route path="/findConnection" component={FindConnection} />
          </Switch>
        </BrowserRouter>
      </div>
    );  
  };
}

export default App;
