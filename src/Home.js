import './Home.css';
import { Row, Col, Container} from 'react-bootstrap';

import AvatarVid1WebM from './img/4444trans_avi_1.webm';

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
        
       <video autoPlay loop muted className="AvatarVid1" alt="Avatar 1 Vid" poster="path_to_poster_image.jpg">
        <source src={AvatarVid1WebM} type="video/webm" />
        {/* Add additional source elements for different video formats if needed */}
      </video>


        </Col>

      </Row>
    </Container>
  );
}

export default App;
