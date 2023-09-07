import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import fslogo from '../img/Section1/FSLOGO.png';

class YourComponent4 extends Component {
    render() {
        return (

            <Col md={4} className='section2'>
                <img className="fslogo" src={fslogo} alt="fslogo"></img>

                <br></br>

                <button className="s2btn">About</button>
                <br></br>
                <button className="s2btn">Commissions</button>
                <br></br>
                <button className="s2btn">Contact Me</button>

            </Col>

        )
    }
}

export default YourComponent4;
