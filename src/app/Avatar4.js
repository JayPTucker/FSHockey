// YourComponent.js
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Avi4Pic from '../img/Avatar4/avatar4.png';
import AvatarVid4WebM from '../img/Avatar4/avatar4.webm';
import goonSquadLogo from '../img/Avatar2/goonsquadlogo.png';

class YourComponent4 extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    // Add event listeners to control video playback
    this.avatar3 = document.querySelector('.avatar4'); // Replace with a more specific selector if needed
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
      <Col md={2} className='avatar4'>

        <img src={goonSquadLogo} className='goonSquadLogo' alt="goonSquadLogo"></img>

        <p className='avatarTitle'>Yoda</p>
        <p className='avatarMk'>Mark 1</p>

        <video
          ref={this.videoRef}
          loop
          muted
          className="AvatarVid4"
          alt="Avatar4Vid"
          controls={false} // Disable the controls
          disablePictureInPicture // Disable the PiP button
        >
          <source src={AvatarVid4WebM} type="video/webm" />
          {/* Add additional source elements for different video formats if needed */}
        </video>

        <img src={Avi4Pic} className='Avi4Pic' alt="BarryBoy"></img>

      </Col>
    );
  }
}

export default YourComponent4;
