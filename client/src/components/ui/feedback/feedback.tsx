import React from 'react';
import PropTypes from 'prop-types';
import './feedback.scss';
import FeedbackBlock from './feedbackBlock/feedbackBlock';
import FeedbackCard from './feedbackCard/feedbackCard';
import { getFeedbacks } from '../../../store/feedbacks';
import { useTypedSelector } from 'components/hooks/reduxToolkitHooks';

const Feedback = () => {
  const feedbacks = useTypedSelector(getFeedbacks());

  return (
    <div className='feedback'>
      <div className='feedback__block'>
        <FeedbackBlock />
      </div>
      <div className='feedback__feedback-cards'>
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} {...feedback} />
        ))}
      </div>
    </div>
  );
};

Feedback.propTypes = {
  maxFeedbacks: PropTypes.number,
};

export default Feedback;
