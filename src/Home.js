// home.js
import React from 'react';
import './Home.css';
import { Row, Col, Container } from 'react-bootstrap';

import favicon from "./img/Section1/favicon.ico"


import Avatar1 from './Avatar1.js'; // Import Avatar1
import Avatar2 from './Avatar2.js';

function App() {
  return (
    <Container fluid>
      <Row className="mainRow">
        <Col md={5} className='section1'>
          <a className="credits" href="https://jaypaultucker.org" rel="noopener noreferrer" target="_blank">
            <img className="navbar-logo" alt="My logo" src={favicon}></img>
            <p>Copyright © Jay Paul Tucker 2023</p>
          </a>
        </Col>
        <Col md={3} className='section2'>
          test
        </Col>

        <Avatar1 /> {/* Render Avatar1 within App */}

        {/* <Avatar2 /> Render Avatar1 within App */}
        <Col md={2} className='section4'>
          test
        </Col>

      </Row>
    </Container>
  );
}

export default App;
