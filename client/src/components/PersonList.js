import React from 'react';
import axios from "axios"; 
import DummyImg from './dummyImg.jpg';
import Moment from 'react-moment';
import 'moment-timezone';

export default class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
          persons: []
        };
      }
    
      componentDidMount() {
        this.getAllPersons()    
      }
    
      getAllPersons = () => {
        axios.get('/persons')   
                .then( res => {
                    this.setState({persons: res.data.persons});
                })
                .catch(err => console.log(err));
      };

    render() {
        return (
            <div className="cardContainer">
                {this.state.persons.map( person => 
                <div className="card" key={person._id} style={{width: "18rem"}}>
                    <img className="card-img-top" src={DummyImg} alt="Profile Image"/>
                    <div className="card-body">
                        <h5 className="card-title">Name: {person.firstName} {person.lastName}</h5>
                        <p className="card-text">{person.notes}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        {/* <span class="badge badge-success" style={person.location ? {} : { display: 'none' }}>Location: {person.location}</span>
                        <span class="badge badge-info" style={person.eventName ? {} : { display: 'none' }}>Event Name: {person.eventName}</span>
                        <span class="badge badge-secondary" style={person.date ? {} : { display: 'none' }}>Date: <Moment fromNow>{person.date}</Moment>{person.location}</span> */}
                        <li className="list-group-item" style={person.location ? {} : { display: 'none' }}>Location: {person.location}</li>
                        <li className="list-group-item"  style={person.eventName ? {} : { display: 'none' }}>Event Name: {person.eventName}</li>
                        <li className="list-group-item" style={person.date ? {} : { display: 'none' }}> 
                            Date: <Moment fromNow>{person.date}</Moment>
                        </li> 
                    </ul>
                    <div className="card-body">
                        <a href="https://www.google.ca" className="card-link">Profile URL</a>
                    </div>
                </div>
                )}
            </div>
        );
    };
};