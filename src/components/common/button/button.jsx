import React from 'react';
import upArrow from '../../../assets/up-button-arrow.png';
import instagramIcon from '../../../assets/instagram-line.png';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({
  onClickFunction,
  text = '',
  isRounded = false,
  hasInstagramIcon = false,
  isUp = false,
}) => {
  return (
    <button
      className={
        'button' +
        (isRounded ? ' button_rounded' : '') +
        (hasInstagramIcon ? ' button_with-icon' : '')
      }
      onClick={() => onClickFunction()}
    >
      {isUp && <img className='button__arrow' src={upArrow} alt='Arrow icon' />}
      <p
        className={
          'button__content' +
          (hasInstagramIcon ? ' button__content_with-icon' : '')
        }
      >
        {hasInstagramIcon && (
          <img
            className='button__instagam'
            src={instagramIcon}
            alt='Instagram icon'
          />
        )}
        {text}
      </p>
    </button>
  );
};

Button.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  text: PropTypes.string,
  isRounded: PropTypes.bool,
  hasInstagramIcon: PropTypes.bool,
  isUp: PropTypes.bool,
};

export default Button;
