import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ValidatorConfig, validator } from '../../../utils/validator';
import TextField from '../../common/form/textField';
import TextAreaField from '../../common/form/textAreaField';
import './contactsForm.scss';
import messageService from '../../../services/message.service';

interface ContactsFormProps {
  onSendFunction: () => void;
}

const ContactsForm = ({ onSendFunction }: ContactsFormProps) => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };

  const [data, setData] = useState(initialState);

  const [sendButtonClicked, setSendButtonClicked] = useState(false);

  const [errors, setErrors] = useState<any>({});

  const handleChange = (target: any) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig: ValidatorConfig = {
    name: {
      isRequired: {
        message: 'Введите своё имя',
      },
    },
    email: {
      isRequired: {
        message: 'Укажите email',
      },
      isEmail: {
        message: 'Email заполнен неккоретно',
      },
    },
    message: {
      isRequired: {
        message: 'Пожалуйста, напишите текст своего обращения',
      },
    },
  };

  useEffect(() => {
    if (sendButtonClicked) {
      validate();
    }
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setSendButtonClicked(true);

    const isValid = validate();
    if (!isValid) return;

    await messageService.sendMessage({ ...data });
    onSendFunction();
    setData(initialState);
    setSendButtonClicked(false);
  };

  return (
    <form className='contacts-form' onSubmit={handleSubmit}>
      <TextField
        label='Ваше имя'
        name='name'
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label='Email адрес'
        name='email'
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextAreaField
        label='Ваше сообщение'
        name='message'
        value={data.message}
        onChange={handleChange}
        error={errors.message}
      />
      <button
        className='contacts-form__button'
        type='submit'
        disabled={!isValid}
      >
        Отправить
      </button>
    </form>
  );
};

ContactsForm.propTypes = {
  onSendFunction: PropTypes.func.isRequired,
};

export default ContactsForm;
