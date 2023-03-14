import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
import logoWhiteText from '../assets/logo-white-text.png';

const Logo = ({ type = 'standard' }) => {
  if (type === 'whiteText') {
    return <img src={logoWhiteText} alt='Логотип Рикша' />;
  } else {
    return <img src={logo} alt='Логотип Рикша' />;
  }
};

Logo.propTypes = {
  type: PropTypes.string,
};

export default Logo;
