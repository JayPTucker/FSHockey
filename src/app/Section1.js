import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
// import favicon from "../img/Section1/favicon.ico"
import './Section1.css'

import HeaderPic from '../img/Section1/headertest.png';

class YourComponent3 extends Component {
    render() {
        return (
            <Col md={5} className='section1'>

                <img src={HeaderPic} className='headerPic' alt="HeaderPic"></img>
        

                {/* <a className="credits" href="https://jaypaultucker.org" rel="noopener noreferrer" target="_blank">
                <img className="navbar-logo" alt="My logo" src={favicon}></img>
                <p>Copyright © Jay Paul Tucker 2023</p>
                </a> */}
            </Col>
        )
    }
}

export default YourComponent3;
