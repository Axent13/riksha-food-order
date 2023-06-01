import React from 'react';
import PropTypes from 'prop-types';
import './successToast.scss';

const SuccessToast = ({ isShown = false }) => {
  return (
    <div
      className={'success-toast' + (isShown ? ' success-toast_animated' : '')}
    >
      <p className='success-toast__title'>Ваше сообщение успешно отправлено!</p>
      <p>Мы свяжемся с вами в ближайшее время.</p>
    </div>
  );
};

SuccessToast.propTypes = {
  isShown: PropTypes.bool,
};

export default SuccessToast;
