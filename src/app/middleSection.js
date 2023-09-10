import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import favicon from "../img/MiddleSection/favicon.ico";
import fslogo from '../img/MiddleSection/FSLOGO.png';

class YourComponent4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: null,
        };
    }

    handleButtonClick = (buttonName) => {
        this.setState({ activeButton: buttonName });
    };

    renderContent = () => {
        const { activeButton } = this.state;

        if (activeButton === 'About') {
            return <p className="btnContent">
                About content here
                </p>;
        } else if (activeButton === 'Commissions') {
            return <p className="btnContent">
                Commissions content here
                </p>;
        } else if (activeButton === 'Contact') {
            return <p className="btnContent">
                Discord: fshockey <br></br>
                VRChat: FS Hockey
                </p>;
        } else {
            return null; // No active button, don't display any content
        }
    };

    render() {
        return (
            <Col md={4} className='middleSection'>
                <div className='middleSectionZindex'>
                    <a className="credits" href="https://jaypaultucker.org" rel="noopener noreferrer" target="_blank">
                        <img className="navbar-logo" alt="My logo" src={favicon}></img>
                        <p>Copyright © Jay Paul Tucker 2023</p>
                    </a>

                    <img className="fslogo" src={fslogo} alt="fslogo"></img>
                    <br></br>

                    <button className="middlebtn" onClick={() => this.handleButtonClick('About')}>
                        About
                    </button>
                    <br></br>
                    <button className="middlebtn" onClick={() => this.handleButtonClick('Commissions')}>
                        Commissions
                    </button>
                    <br></br>
                    <button className="middlebtn" onClick={() => this.handleButtonClick('Contact')}>
                        Contact Me
                    </button>

                    {/* Display content based on the active button */}
                    {this.renderContent()}
                </div>
            </Col>
        );
    }
}

export default YourComponent4;
