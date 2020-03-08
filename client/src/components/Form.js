import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css"
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
                

                <div className='form-input'>
                    <label className="label-style">First Name</label>
                    <input type="text" value={this.state.firstName} placeholder="First Name"
                        onChange={this.handleFirstNameChange} />

                </div>

                <div className='form-input'>
                    <label className="label-style">Last Name</label>
                    <input type="text" value={this.state.lastName} placeholder="Last Name"
                        onChange={this.handleLastNameChange} />
                </div>


                <div className='form-input'>
                    <label className="label-style">Location</label>
                    <input type="text" value={this.state.location} placeholder="Location"
                        onChange={this.handleLocationChange} />
                </div>
                <div className='form-input'>
                    <label className="label-style">Event Name</label>
                    <input type="text" value={this.state.eventName} placeholder="Event Name"
                        onChange={this.handleEventNameChange} />
                </div>
                <div className='form-input'>
                    <label className="label-style">Date</label>
                    <DatePicker id="date-picker"
                        selected={this.state.date}
                        onChange={this.handleDateChange}
                    />
                </div>
                <div className='form-input'>
                    <label className='label-style'>Profile URL</label>
                    <textarea value={this.state.profileUrl} placeholder="Profile URL"
                        onChange={this.handleProfileURLChange} />
                </div>
                <div className='form-input'>
                    <label className='label-style'>Notes</label>
                    <textarea value={this.state.notes} placeholder="Notes"
                        onChange={this.handleNotesChange} />
                </div>
                <div id="button-div">
                    <button type="submit" id='save-button'>Save</button>
                </div>
                
            </form>
        )
    }
}

export default Form;
