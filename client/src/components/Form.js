import React, {Component} from 'react';
import axios from "axios"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Form extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            location: '',
            eventName: '',
            date: new Date(),
            profileUrl: '',
            notes: ''
        }
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleLocationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    handleEventNameChange = (event) => {
        this.setState({
            eventName: event.target.value
        })
    }

    handleDateChange = (event) => {
        this.setState({
            date: event
        })
    }

    handleProfileURLChange = (event) => {
        this.setState({
            profileUrl: event.target.value
        })
    }

    handleNotesChange = (event) => {
        this.setState({
            notes: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            location: this.state.location,
            eventName: this.state.eventName,
            date: this.state.date,
            profileUrl: this.state.profileUrl,
            notes: this.state.notes
        }
        // axios.post('/persons', {person})
        axios({
            method: 'post',
            url: '/persons',
            data: person
        })
        .then(res => {
            console.log(res.data);
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <div>
                            <label>First Name</label>
                            <input type="text" value={this.state.firstName} placeholder="First Name"
                                            onChange={this.handleFirstNameChange}/>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <div>
                            <label>Last Name</label>
                            <input type="text" value={this.state.lastName} placeholder="Last Name"
                                            onChange={this.handleLastNameChange}/>
                        </div>
                    </div>
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" value={this.state.location} placeholder="Location"
                                    onChange={this.handleLocationChange}/>
                </div>
                <div>
                    <label>Event Name</label>
                    <input type="text" value={this.state.eventName} placeholder="Event Name"
                                    onChange={this.handleEventNameChange}/>
                </div>
                <div>
                    <label>Date</label>
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.handleDateChange}
                    />
                </div>
                <div>
                    <label>Profile URL</label>
                    <textarea value={this.state.profileUrl} placeholder="Profile URL"
                                    onChange={this.handleProfileURLChange}/>
                </div>
                <div>
                    <label>Notes</label>
                    <textarea value={this.state.notes} placeholder="Notes"
                                    onChange={this.handleNotesChange}/>
                </div>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default Form;
