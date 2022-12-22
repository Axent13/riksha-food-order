import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ text, subText, leftTopImg, rightCenterImg }) => {
  return (
    <div>
      {leftTopImg && <img src={leftTopImg} />}
      <h2>
        {text} {subText && <span>{subText}</span>}
      </h2>
      {rightCenterImg && <img src={rightCenterImg} />}
    </div>
  );
};

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string,
  leftTopImg: PropTypes.string,
  rightCenterImg: PropTypes.string,
};

export default SectionHeader;
