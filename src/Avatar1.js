// YourComponent.js
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Avi1Pic from './img/fsh_avi_1_pic.png'

import AvatarVid1WebM from './img/4444trans_avi_1.webm';

class YourComponent extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    // Add event listeners to control video playback
    this.section4 = document.querySelector('.section4'); // Replace with a more specific selector if needed
    this.section4.addEventListener('mouseenter', this.playVideo);
    this.section4.addEventListener('mouseleave', this.pauseVideo);
  }

  componentWillUnmount() {
    // Remove event listeners when the component unmounts
    this.section4.removeEventListener('mouseenter', this.playVideo);
    this.section4.removeEventListener('mouseleave', this.pauseVideo);
  }

  playVideo = () => {
    // Play the video when hovering
    if (this.videoRef.current) {
      this.videoRef.current.play();
    }
  };

  pauseVideo = () => {
    // Pause the video when no longer hovering
    if (this.videoRef.current) {
      this.videoRef.current.pause();
    }
  };

  render() {
    return (
      <Col md={2} className='section4'>

        <p className='avatarTitle'>BarryBoy</p>
        <video
          ref={this.videoRef}
          loop
          muted
          className="AvatarVid1"
          alt="Avatar 1 Vid"
        >
          <source src={AvatarVid1WebM} type="video/webm" />
          {/* Add additional source elements for different video formats if needed */}
        </video>

        <img src={Avi1Pic} className='Avi1Pic' alt="BarryBoy"></img>
      </Col>
    );
  }
}

export default YourComponent;
