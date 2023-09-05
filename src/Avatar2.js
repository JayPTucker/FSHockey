// // YourComponent.js
// import React, { Component } from 'react';
// import { Col } from 'react-bootstrap';
// import Avi2Pic from './img/Section3/fsh_avi_1_pic.png'

// import AvatarVid2WebM from './img/Section3/4444trans_avi_1.webm';

// class YourComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.videoRef = React.createRef();
//   }

//   componentDidMount() {
//     // Add event listeners to control video playback
//     this.section4 = document.querySelector('.section4'); // Replace with a more specific selector if needed
//     this.section4.addEventListener('mouseenter', this.playVideo);
//     this.section4.addEventListener('mouseleave', this.resetVideo);
//   }

//   componentWillUnmount() {
//     // Remove event listeners when the component unmounts
//     this.section4.removeEventListener('mouseenter', this.playVideo);
//     this.section4.removeEventListener('mouseleave', this.resetVideo);
//   }

//   playVideo = () => {
//     // Play the video when hovering
//     if (this.videoRef.current) {
//       this.videoRef.current.play();
//     }
//   };

//   resetVideo = () => {
//     // Reset the video to 0 seconds when not hovering.  Also pauses it.
//     if (this.videoRef.current) {
//       this.videoRef.current.pause();
//       this.videoRef.current.currentTime = 0;
//     }
//   };

//   render() {
//     return (
//       <Col md={2} className='section3'>

//         <p className='avatarTitle'>FILLER</p>
//         <video
//           ref={this.videoRef}
//           loop
//           muted
//           className="AvatarVid2"
//           alt="Avatar 2 Vid"
//           controls={false} // Disable the controls
//           disablepictureinpicture // Disable the PiP button
//         >
//           <source src={AvatarVid2WebM} type="video/webm" />
//           {/* Add additional source elements for different video formats if needed */}
//         </video>

//         <img src={Avi2Pic} className='Avi1Pic' alt="BarryBoy"></img>
//       </Col>
//     );
//   }
// }

// export default YourComponent;