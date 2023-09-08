import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Avi2Pic from '../img/Section4/Avatar2Pic.png'; // Update the image path
import AvatarVid2WebM from '../img/Section4/Avatar2-60.webm'; // Update the video path
import goonSquadLogo from '../img/Section4/goonsquadlogo.png';

class YourComponent2 extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    // Add event listeners to control video playback
    this.avatar4 = document.querySelector('.avatar4'); // Update the selector to target .avatar4
    this.avatar4.addEventListener('mouseenter', this.playVideo);
    this.avatar4.addEventListener('mouseleave', this.resetVideo);
  }

  componentWillUnmount() {
    // Remove event listeners when the component unmounts
    this.avatar4.removeEventListener('mouseenter', this.playVideo);
    this.avatar4.removeEventListener('mouseleave', this.resetVideo);
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
    }
  };

  render() {
    return (
      <Col md={2} className='avatar4'> {/* Update the class name to target .section4 */}

        <img src={goonSquadLogo} className='goonSquadLogo' alt="goonSquadLogo"></img>

        <p className='avatarTitle'>Plaguey</p>

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
