// home.js
import React from 'react';
import './Home.css';
import { Row, Col, Container } from 'react-bootstrap';



import Avatar1 from './Avatar1.js'; // Import Avatar1

function App() {
  return (
    <Container fluid>
      <Row className="mainRow">
        <Col md={5} className='section1'>
          tes
        </Col>
        <Col md={3} className='section2'>
          test
        </Col>
        <Col md={2} className='section3'>
          test
        </Col>


        <Avatar1 /> {/* Render Avatar1 within App */}

      </Row>
    </Container>
  );
}

export default App;
