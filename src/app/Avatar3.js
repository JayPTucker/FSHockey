// YourComponent.js
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Avi3Pic from '../img/Avatar3/avatar3.png';
import AvatarVid3WebM from '../img/Avatar3/avatar3.webm';

class YourComponent3 extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    // Add event listeners to control video playback
    this.avatar3 = document.querySelector('.avatar3'); // Replace with a more specific selector if needed
    this.avatar3.addEventListener('mouseenter', this.playVideo);
    this.avatar3.addEventListener('mouseleave', this.resetVideo);
  }

  componentWillUnmount() {
    // Remove event listeners when the component unmounts
    this.avatar3.removeEventListener('mouseenter', this.playVideo);
    this.avatar3.removeEventListener('mouseleave', this.resetVideo);
  }

  playVideo = () => {
    // Play the video when hovering
    if (this.videoRef.current) {
      this.videoRef.current.play();
    }
  };

  resetVideo = () => {
    // Reset the video to 0 seconds when not hovering.  Also pauses it.
    if (this.videoRef.current) {
      this.videoRef.current.pause();
    }
  };

  render() {
    return (
      <Col md={2} className='avatar3'>

        <p className='avatarTitle'>Unknown</p>

        <video
          ref={this.videoRef}
          loop
          muted
          className="AvatarVid3"
          alt="Avatar3Vid"
          controls={false} // Disable the controls
          disablePictureInPicture // Disable the PiP button
        >
          <source src={AvatarVid3WebM} type="video/webm" />
          {/* Add additional source elements for different video formats if needed */}
        </video>

        <img src={Avi3Pic} className='Avi3Pic' alt="BarryBoy"></img>

      </Col>
    );
  }
}

export default YourComponent3;
