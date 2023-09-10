import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import favicon from "../img/MiddleSection/favicon.ico";

import fslogo from '../img/MiddleSection/FSLOGO.png';

class YourComponent4 extends Component {
    render() {
        return (

            <Col md={4} className='middleSection'>

                <div className='middleSectionZindex'>

                    <a className="credits" href="https://jaypaultucker.org" rel="noopener noreferrer" target="_blank">
                        <img className="navbar-logo" alt="My logo" src={favicon}></img>
                        <p>Copyright © Jay Paul Tucker 2023</p>
                    </a>
                    

                    <img className="fslogo" src={fslogo} alt="fslogo"></img>


                    <br></br>

                    <button className="middlebtn">About</button>
                    <br></br>
                    <button className="middlebtn">Commissions</button>
                    <br></br>
                    <button className="middlebtn">Contact Me</button>
                </div>

            </Col>

        )
    }
}

export default YourComponent4;
