import React from "react";
import {Link } from "react-router-dom";
import PersonList from './PersonList';

export default class FindConnection extends React.Component {
    render() {
        return (
            <div>
                <h1>Find Connection</h1>
                <PersonList />
            </div>
        );
    };
};

