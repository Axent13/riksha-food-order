import React from 'react';
import PropTypes from 'prop-types';
import './loader.scss';

const Loader = ({ isWholeHeight = false }) => {
  return (
    <div className={'loader' + (isWholeHeight ? ' loader__whole-height' : '')}>
      <span className='loader__loader'></span>
    </div>
  );
};

Loader.propTypes = {
  isWholeHeight: PropTypes.bool,
};

export default Loader;
