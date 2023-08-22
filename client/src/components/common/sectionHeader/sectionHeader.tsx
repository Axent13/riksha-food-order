import React from 'react';
import './sectionHeader.scss';

interface SectionHeaderProps {
  text: string;
  subText?: string;
  leftTopImg?: string;
  rightCenterImg?: string;
}

const SectionHeader = ({
  text,
  subText,
  leftTopImg,
  rightCenterImg,
}: SectionHeaderProps) => {
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

export default SectionHeader;
