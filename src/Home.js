import './Home.css';
import { Row, Col, Container} from 'react-bootstrap';

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

        <Col md={2} className='section4'>
        test
        </Col>

      </Row>
    </Container>
  );
}

export default App;
