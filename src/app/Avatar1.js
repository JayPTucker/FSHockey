// YourComponent.js
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Avi1Pic from '../img/Avatar1/avatar1.png';
import AvatarVid1WebM from '../img/Avatar1/avatar1.webm';

import barryLogo from "../img/MiddleSection/favicon.ico"

class YourComponent extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    // Add event listeners to control video playback
    this.avatar1 = document.querySelector('.avatar1'); // Replace with a more specific selector if needed
    this.avatar1.addEventListener('mouseenter', this.playVideo);
    this.avatar1.addEventListener('mouseleave', this.resetVideo);
  }

  componentWillUnmount() {
    // Remove event listeners when the component unmounts
    this.avatar1.removeEventListener('mouseenter', this.playVideo);
    this.avatar1.removeEventListener('mouseleave', this.resetVideo);
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
      <Col md={2} className='avatar1'>

        <img src={barryLogo} className='barryLogo' alt="BarryLogo"></img>

        <p className='avatarTitle'>BarryBoy</p>

        <video
          ref={this.videoRef}
          loop
          muted
          className="AvatarVid1"
          alt="Avatar 1 Vid"
          controls={false} // Disable the controls
          disablePictureInPicture // Disable the PiP button
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
