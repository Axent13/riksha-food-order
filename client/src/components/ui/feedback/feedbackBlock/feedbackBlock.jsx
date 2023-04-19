import React, { useState } from 'react';
import './feedbackBlock.scss';
import Button from '../../../common/button/button';

import messageRollImage from '../../../../assets/message-roll.png';
import FeedbackModal from '../feedbackModal/feedbackModal';

const FeedbackBlock = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const handleClick = () => {
    setIsModalShown(true);
  };

  return (
    <div className='feedback-block'>
      {isModalShown && <FeedbackModal />}
      <div className='feedback-block__text-and-subtext-and-image'>
        <div className='feedback-block__text-and-subtext'>
          <p className='feedback-block__text'>Заказывали уже у нас?</p>
          <p className='feedback-block__subtext'>
            Оставьте отзыв. Помогите нам стать лучше.
          </p>
        </div>
        <div className='feedback-block__image-container'>
          <img className='feedback-block__image' src={messageRollImage} />
        </div>
      </div>
      <div className='feedback-block__button'>
        <Button
          onClickFunction={handleClick}
          text={'Оставить отзыв'}
          isRounded={true}
        />
      </div>
    </div>
  );
};

export default FeedbackBlock;
