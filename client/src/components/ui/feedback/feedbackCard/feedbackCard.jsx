import React from 'react';
import PropTypes from 'prop-types';
import './feedbackCard.scss';
import RatingWrapper from '../../../common/rating/ratingWrapper';

const FeedbackCard = ({ userAvatar, userName, date, rate, text, image }) => {
  return (
    <div className='feedback-card'>
      <div className='feedback-card__user-and-date'>
        <div className='feedback-card__user-avatar'>
          <img src={userAvatar} alt={userName} />
        </div>
        <div className='feedback-card__name-and-date'>
          <p className='feedback-card__name'>{userName}</p>
          <p className='feedback-card__date'>{date}</p>
        </div>
      </div>
      <div className='feedback-card__rate-and-text-and-image'>
        <div className='feedback-card__rate-and-text'>
          <div className='feedback-card__rate'>
            <RatingWrapper rate={rate} isFrozen={true} />
          </div>
          <p className='feedback-card__text'>{text}</p>
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
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default FeedbackCard;
