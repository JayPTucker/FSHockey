import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import fslogo from '../img/Section1/FSLOGO.png';

class YourComponent4 extends Component {
    render() {
        return (
            <Col md={3} className='section2'>
            <img className="fslogo" src={fslogo} alt="fslogo"></img>
          </Col>
        )
    }
}

export default YourComponent4;
