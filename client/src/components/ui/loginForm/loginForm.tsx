import React, { useEffect, useState } from 'react';
import { validator } from '../../../utils/validator';
import TextField from '../../common/form/textField';
import { login } from '../../../store/users';
import { Link } from 'react-router-dom';
import './loginForm.scss';
import { useTypedDispatch } from 'components/hooks/reduxToolkitHooks';

const LoginForm = () => {
  const dispatch = useTypedDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
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

    dispatch(login(data));
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2 className='login-form__title'>Вход</h2>
      <TextField
        label='Электронная почта'
        name='email'
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label='Пароль'
        type='password'
        name='password'
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button type='submit' disabled={!isValid} className='login-form__button'>
        Войти
      </button>
      <Link to='/'>
        <button className='user-profile__button'> Назад к товарам</button>
      </Link>
      <p>
        или{' '}
        <Link className='login-form__register-text' to='/signUp'>
          Зарегистрироваться
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
