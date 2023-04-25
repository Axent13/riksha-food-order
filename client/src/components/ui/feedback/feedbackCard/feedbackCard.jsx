import React from 'react';
import PropTypes from 'prop-types';
import './feedbackCard.scss';
import RatingWrapper from '../../../common/rating/ratingWrapper';

const FeedbackCard = ({ userAvatar, name, date, rate, message, image }) => {
  const dateObject = new Date(date);

  let day = dateObject.getDate();
  if (day < 10) day = `0${day}`;

  let month = dateObject.getMonth() + 1;
  if (month < 10) month = `0${month}`;

  const formattedDate = `${day}.${month}.${dateObject.getFullYear()}`;

  return (
    <div className='feedback-card'>
      <div className='feedback-card__user-and-date'>
        <div className='feedback-card__user-avatar'>
          {userAvatar && <img src={userAvatar} alt={name} />}
        </div>
        <div className='feedback-card__name-and-date'>
          <p className='feedback-card__name'>{name}</p>
          <p className='feedback-card__date'>{formattedDate}</p>
        </div>
      </div>
      <div className='feedback-card__rate-and-message-and-image'>
        <div className='feedback-card__rate-and-message'>
          <div className='feedback-card__rate'>
            <RatingWrapper rate={rate} isFrozen={true} />
          </div>
          <p className='feedback-card__message'>{message}</p>
        </div>
        {image && (
          <div className='feedback-card__image-container'>
            <img src={image} />
          </div>
        )}
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  userAvatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default FeedbackCard;
