import React, { useEffect, useState } from 'react';
import { validator } from '../../../utils/validator';
import TextField from '../../common/form/textField';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../store/users';
import './editUserForm.scss';

const EditUserForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения',
      },
      min: {
        message: 'Имя должено состоять минимус из 3 символов',
        value: 3,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = {
      ...data,
    };
    dispatch(updateUser(newData));
  };

  return (
    <form className='edit-user-form' onSubmit={handleSubmit}>
      <h2 className='edit-user-form__title'>Редактирование</h2>
      <TextField
        label='Имя'
        name='name'
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <button
        type='submit'
        disabled={!isValid}
        className='edit-user-form__button'
      >
        Сохранить
      </button>
    </form>
  );
};

export default EditUserForm;
