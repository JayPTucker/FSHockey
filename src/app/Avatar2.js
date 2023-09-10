import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Avi2Pic from '../img/Avatar2/Avatar2Pic.png'; // Update the image path
import AvatarVid2WebM from '../img/Avatar2/Avatar2-60.webm'; // Update the video path
import goonSquadLogo from '../img/Avatar2/goonsquadlogo.png';

class YourComponent2 extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    // Add event listeners to control video playback
    this.avatar2 = document.querySelector('.avatar2'); // Update the selector to target .avatar2
    this.avatar2.addEventListener('mouseenter', this.playVideo);
    this.avatar2.addEventListener('mouseleave', this.resetVideo);
  }

  componentWillUnmount() {
    // Remove event listeners when the component unmounts
    this.avatar2.removeEventListener('mouseenter', this.playVideo);
    this.avatar2.removeEventListener('mouseleave', this.resetVideo);
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
      <Col md={2} className='avatar2'> {/* Update the class name to target .avatar2 */}

        <img src={goonSquadLogo} className='goonSquadLogo' alt="goonSquadLogo"></img>

        <p className='avatarTitle'>Plaguey</p>
        <p className='avatarMk'>Mark 1</p>

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
