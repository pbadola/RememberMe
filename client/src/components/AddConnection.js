import React from "react";
import {Link } from "react-router-dom";
import Form from './Form';

export default class AddConnection extends React.Component {
    render() {
        return (
            <div>
                <h1 className="heading">Add Connection</h1>
                <Form />
            </div>
        );
    };
};

