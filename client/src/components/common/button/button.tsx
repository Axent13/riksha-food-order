import React from 'react';
import upArrow from 'assets/up-button-arrow.png';
import instagramIcon from 'assets/instagram-line.png';
import './button.module.scss';

interface ButtonProps {
  onClickFunction(): void;
  text?: string;
  isRounded?: boolean;
  hasInstagramIcon?: boolean;
  isUp?: boolean;
  isDisabled?: boolean;
}

const Button = ({
  onClickFunction,
  text = '',
  isRounded = false,
  hasInstagramIcon = false,
  isUp = false,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button
      className={
        'button' +
        (isRounded ? ' button_rounded' : '') +
        (hasInstagramIcon ? ' button_with-icon' : '')
      }
      disabled={isDisabled}
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

export default Button;
