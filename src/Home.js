// home.js
import React from 'react';
import './Home.css';
import { Row, Container } from 'react-bootstrap';

import MiddleSection from './app/middleSection.js';
import Avatar1 from './app/Avatar1.js'; // Import Avatar1
import Avatar2 from './app/Avatar2.js';
import Avatar3 from './app/Avatar3.js';
import Avatar4 from './app/Avatar4.js';

function App() {
  return (
    <Container fluid>
      <Row className="mainRow">

        <Avatar1 /> 

        <Avatar2 />

        <MiddleSection />

        {/* Render Avatar1 within App */}
        <Avatar3 /> 

        {/* Render Avatar1 within App */}
        <Avatar2 />

      </Row>
    </Container>
  );
}

export default App;
