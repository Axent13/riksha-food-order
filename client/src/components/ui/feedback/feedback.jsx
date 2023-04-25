import React from 'react';
import PropTypes from 'prop-types';
import './feedback.scss';

import userAvatar1 from '../../../assets/feedbacks/user-avatar-1.png';
import image1 from '../../../assets/feedbacks/image-1.png';
import userAvatar2 from '../../../assets/feedbacks/user-avatar-2.png';
import FeedbackBlock from './feedbackBlock/feedbackBlock';
import FeedbackCard from './feedbackCard/feedbackCard';

const gettedFeedbacks = [
  {
    _id: 123,
    userAvatar: userAvatar1,
    userName: 'Яна Рождественская',
    date: '12.02.2022',
    rate: 3,
    text: 'Суши очень вкусные!! Обожаем с мужем «запеченный сет»🤤 Доставка всегда своевременна. Курьеры приветливы. Удобный сайт, большой выбор. Большая бутылка соуса, всегда в пакетике есть салфетки. Для нас это однозначно «доставка суши» № 1 в Краснодаре!',
    image: image1,
  },
  {
    _id: 456,
    userAvatar: userAvatar2,
    userName: 'Марина Жук',
    date: '20.01.2022',
    rate: 5,
    text: 'Очень вкусно, всегда у вас беру! Довольна скоростью доставки и вкусом) Рекомендую',
  },
];

const Feedback = ({ maxFeedbacks = 2 }) => {
  return (
    <div className='feedback'>
      <div className='feedback__block'>
        <FeedbackBlock />
      </div>
      <div className='feedback__feedback-cards'>
        {gettedFeedbacks.map((feedback) => (
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
