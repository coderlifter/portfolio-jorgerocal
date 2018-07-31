import React, { Component } from 'react';
import SocialNetworks from './SocialNetworks';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
          <div className='Footer'>
            <SocialNetworks />
          </div>
      </div>
    );
  }
}

export default Footer;
