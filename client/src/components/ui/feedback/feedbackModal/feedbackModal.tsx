import React, { useState, useEffect } from 'react';
import './feedbackModal.scss';

import { validator } from '../../../../utils/validator';
import RatingWrapper from '../../../common/rating/ratingWrapper';
import TextAreaField from '../../../common/form/textAreaField';
import TextField from '../../../common/form/textField';
import { addFeedback } from '../../../../store/feedbacks';
import { useTypedDispatch } from 'components/hooks/reduxToolkitHooks';

interface FeedbackModalProps {
  isShown?: boolean;
  onCloseButtonClick?(): void;
}

type FeedbackModalData = {
  message: string;
  phone: string;
  name: string;
  rate: number;
};

const FeedbackModal = ({
  isShown = false,
  onCloseButtonClick,
}: FeedbackModalProps) => {
  const initialData: FeedbackModalData = {
    message: '',
    phone: '',
    name: '',
    rate: null,
  };

  const [data, setData] = useState<FeedbackModalData>(initialData);

  const [errors, setErrors] = useState<any>(null);
  const dispatch = useTypedDispatch();

  const handleChange = (target: any) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleRatingChange = (newValue: number) => {
    setData((prevState) => ({
      ...prevState,
      rate: newValue,
    }));
  };

  const validatorConfig = {
    message: {
      isRequired: {
        message: 'Отзыв не должен быть пустым!',
      },
    },
    phone: {
      isRequired: {
        message: 'Введите свой номер телефона',
      },
    },
    name: {
      isRequired: {
        message: 'Ваше имя и фамилию',
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    const transformedData = {
      ...data,
      rate: data.rate || 0,
      date: new Date(),
    };

    await dispatch(addFeedback({ ...transformedData }));
    onCloseButtonClick();

    setData(initialData);
  };

  return (
    <div
      className={'feedback-modal' + (isShown ? ' feedback-modal_shown' : '')}
    >
      <button
        className='feedback-modal__close-button'
        onClick={onCloseButtonClick}
      ></button>
      <form className='feedaback-modal__form' onSubmit={handleSubmit}>
        <h2 className='feedback-modal__title'>Оставить отзыв</h2>
        <div className='feedback-modal__rating'>
          <p className='feedback-modal__rating-title'>Ваша оценка</p>
          <RatingWrapper
            rate={data.rate}
            isFrozen={false}
            onRatingClick={handleRatingChange}
          />
        </div>
        <div className='feedback-modal__text-area-field'>
          <TextAreaField
            name='message'
            value={data.message}
            onChange={handleChange}
            error={errors.message}
            placeholder='Напишите Ваш отзыв'
          />
        </div>
        <div className='feedback-modal__phone-and-name'>
          <TextField
            name='phone'
            value={data.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder='Телефон'
          />
          <TextField
            name='name'
            value={data.name}
            onChange={handleChange}
            error={errors.name}
            placeholder='Ваше имя и фамилия'
          />
        </div>
        <div className='feedback-modal__button-container'>
          <button
            type='submit'
            disabled={!isValid}
            className='feedback-modal__button'
          >
            Оставить отзыв
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackModal;
