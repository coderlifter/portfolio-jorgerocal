import React, { Component } from 'react';
import './Logo.css';

import LogoImage from '../../resources/logo.svg';

class Logo extends Component {
  render() {
    return (
      <div className='LogoContainer'>
        <img src={LogoImage} className='LogoImage' alt='Logo' />
        <p id='LogoName' className='Title'>
          JORGE<b>ROCAL</b>
        </p>
      </div>
    );
  }
}

export default Logo;
