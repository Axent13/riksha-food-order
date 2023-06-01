import React from 'react';
import './paymentFeatureCard.scss';
import PropTypes from 'prop-types';

const PaymentFeatureCard = ({ image, name, description }) => {
  return (
    <div className='payment-feature-card'>
      <img
        src={image}
        alt={`Иконка ${name}`}
        className='payment-feature-card__image'
      />
      <h3 className='payment-feature-card__name'>{name}</h3>
      <p className='payment-feature-card__description'>{description}</p>
    </div>
  );
};

PaymentFeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PaymentFeatureCard;
