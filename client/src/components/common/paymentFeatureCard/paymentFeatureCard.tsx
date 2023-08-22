import React from 'react';
import './paymentFeatureCard.scss';
import PropTypes from 'prop-types';

interface PaymentFeatureCardProps {
  image: string;
  name: string;
  description: string;
}

const PaymentFeatureCard = ({
  image,
  name,
  description,
}: PaymentFeatureCardProps) => {
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

export default PaymentFeatureCard;
