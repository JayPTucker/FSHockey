import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import favicon from "../img/Section1/favicon.ico"

class YourComponent3 extends Component {
    render() {
        return (
            <Col md={5} className='section1'>
                <a className="credits" href="https://jaypaultucker.org" rel="noopener noreferrer" target="_blank">
                <img className="navbar-logo" alt="My logo" src={favicon}></img>
                <p>Copyright © Jay Paul Tucker 2023</p>
                </a>
            </Col>
        )
    }
}

export default YourComponent3;
