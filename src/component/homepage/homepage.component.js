import React, { Component } from 'react';
import './homepage.component.scss';
import Directory from '../directory/directory';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
            <Directory></Directory>
            </div>
            
        );
    }
}

export default Homepage;