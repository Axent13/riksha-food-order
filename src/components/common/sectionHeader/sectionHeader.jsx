import React from 'react';
import PropTypes from 'prop-types';
import './sectionHeader.scss';

const SectionHeader = ({ text, subText, leftTopImg, rightCenterImg }) => {
  return (
    <div className='section-header'>
      {leftTopImg && (
        <img className='section-header__left-top-img' src={leftTopImg} />
      )}
      <h2 className='section-header__text'>
        {text}{' '}
        {subText && <span className='section-header__subtext'>{subText}</span>}
        {rightCenterImg && (
          <img
            className='section-header__right-center-img'
            src={rightCenterImg}
          />
        )}
      </h2>
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
