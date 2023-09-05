import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Avi2Pic from './img/Section4/FSH_avi_2.png'; // Update the image path
import AvatarVid2WebM from './img/Section4/4444trans_avi_2.webm'; // Update the video path

class YourComponent2 extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    // Add event listeners to control video playback
    this.section4 = document.querySelector('.section4'); // Update the selector to target .section4
    this.section4.addEventListener('mouseenter', this.playVideo);
    this.section4.addEventListener('mouseleave', this.resetVideo);
  }

  componentWillUnmount() {
    // Remove event listeners when the component unmounts
    this.section4.removeEventListener('mouseenter', this.playVideo);
    this.section4.removeEventListener('mouseleave', this.resetVideo);
  }

  playVideo = () => {
    // Play the video when hovering
    if (this.videoRef.current) {
      this.videoRef.current.play();
    }
  };

  resetVideo = () => {
    // Reset the video to 0 seconds when not hovering. Also pauses it.
    if (this.videoRef.current) {
      this.videoRef.current.pause();
      this.videoRef.current.currentTime = 0;
    }
  };

  render() {
    return (
      <Col md={2} className='section4'> {/* Update the class name to target .section4 */}
        <p className='avatarTitle'>BarryBoy</p>
        <video
          ref={this.videoRef}
          loop
          muted
          className="AvatarVid2"
          alt="Avatar2Vid"
          controls={false} // Disable the controls
          disablePictureInPicture // Disable the PiP button
        >
          <source src={AvatarVid2WebM} type="video/webm" />
          {/* Add additional source elements for different video formats if needed */}
        </video>
        <img src={Avi2Pic} className='Avi2Pic' alt="BarryBoy"></img>
      </Col>
    );
  }
}

export default YourComponent2;
