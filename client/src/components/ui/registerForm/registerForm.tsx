import React, { useEffect, useState } from 'react';
import { validator } from '../../../utils/validator';
import TextField from '../../common/form/textField';
import { signUp } from '../../../store/users';
import { Link } from 'react-router-dom';
import './registerForm.scss';
import { useTypedDispatch } from 'components/hooks/reduxToolkitHooks';

const RegisterForm = () => {
  const dispatch = useTypedDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    isAdmin: false,
    image: '',
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (target: any) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения',
      },
      isEmail: {
        message: 'Email введен некорректно',
      },
    },
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения',
      },
      min: {
        message: 'Имя должено состоять минимус из 3 символов',
        value: 3,
      },
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения',
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву',
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число',
      },
      min: {
        message: 'Пароль должен состаять минимум из 8 символов',
        value: 8,
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = {
      ...data,
    };
    dispatch(signUp(newData));
  };

  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <h2 className='register-form__title'>Регистрация</h2>
      <TextField
        label='Электронная почта'
        name='email'
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label='Имя'
        name='name'
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label='Пароль'
        type='password'
        name='password'
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button
        type='submit'
        disabled={!isValid}
        className='register-form__button'
      >
        Отправить
      </button>
      <p>
        или{' '}
        <Link className='login-form__register-text' to='/login'>
          Войти
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
