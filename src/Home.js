// home.js
import React from 'react';
import './Home.css';
import { Row, Col, Container } from 'react-bootstrap';

import Section1 from './app/Section1';
import Avatar1 from './app/Avatar1.js'; // Import Avatar1
import Avatar2 from './app/Avatar2.js';

function App() {
  return (
    <Container fluid>
      <Row className="mainRow">

        <Section1 />

        <Col md={3} className='section2'>
          test
        </Col>

        {/* Render Avatar1 within App */}
        <Avatar1 /> 

        {/* Render Avatar1 within App */}
        <Avatar2 />

      </Row>
    </Container>
  );
}

export default App;
