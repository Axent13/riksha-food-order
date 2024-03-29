import React, { ChangeEvent, useEffect, useState } from 'react';
import { validator } from '../../../utils/validator';
import TextField from '../../common/form/textField';
import './createProductForm.scss';
import { createProduct } from '../../../store/products';
import RadioField from '../../common/form/radioField';
import { useTypedDispatch } from 'components/hooks/reduxToolkitHooks';
import { Product } from 'types/models/product';

const CreateProductForm = () => {
  const dispatch = useTypedDispatch();
  const [data, setData] = useState<Product>({
    title: '',
    components: '',
    weight: 0,
    kkals: 0,
    oldPrice: 0,
    price: 0,
    categories: null,
    properties: {},
    features: {},
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const validatorConfig = {
    title: {
      isRequired: {
        message: 'Наименование обязательно для заполнения',
      },
    },
    weight: {
      isNumber: {
        message: 'Вес должен быть числом',
      },
      isNotPositiveNumber: {
        message: 'Вес должен быть больше нуля',
      },
    },
    kkals: {
      isNumber: {
        message: 'Каллории должны быть числом',
      },
      isNotPositiveNumber: {
        message: 'Каллории должны быть больше нуля',
      },
    },
    oldPrice: {
      isNumber: {
        message: 'Старая цена должна быть числом',
      },
      isNotPositiveNumber: {
        message: 'Старая цена должна быть больше нуля',
      },
    },
    price: {
      isRequired: {
        message: 'Цена обязательна для заполнения',
      },
      isNumber: {
        message: 'Цена должна быть числом',
      },
      isNotPositiveNumber: {
        message: 'Цена должна быть больше нуля',
      },
    },
    categories: {
      isRequired: {
        message: 'Необходимо выбрать категорию',
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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newProduct: Product = {
      ...data,
    };

    dispatch(createProduct(newProduct));
  };

  return (
    <form className='create-product-form' onSubmit={handleSubmit}>
      <h2 className='create-product-form__title'>Добавить продукт</h2>
      <TextField
        label='Наименование'
        name='title'
        value={data.title}
        onChange={handleChange}
        error={errors.title}
      />
      <TextField
        label='Состав'
        name='components'
        value={data.components}
        onChange={handleChange}
        error={errors.components}
      />
      <div className='create-product-form__text-fields-group'>
        <TextField
          label='Вес'
          name='weight'
          value={data.weight}
          onChange={handleChange}
          error={errors.weight}
        />
        <TextField
          label='Калории'
          name='kkals'
          value={data.kkals}
          onChange={handleChange}
          error={errors.kkals}
        />
      </div>
      <div className='create-product-form__text-fields-group'>
        <TextField
          label='Старая цена'
          name='oldPrice'
          value={data.oldPrice}
          onChange={handleChange}
          error={errors.oldPrice}
        />
        <TextField
          label='Текущая цена'
          name='price'
          value={data.price}
          onChange={handleChange}
          error={errors.price}
        />
      </div>
      <RadioField
        options={[
          { name: 'Пицца', value: 'pizza' },
          { name: 'Суши', value: 'sushi' },
          { name: 'Роллы', value: 'roll' },
          { name: 'Сет', value: 'set' },
          { name: 'WOK', value: 'wok' },
          { name: 'Напитки', value: 'drink' },
          { name: 'Закуски', value: 'snack' },
        ]}
        value={data.categories}
        name='categories'
        onChange={handleChange}
        label='Выберите категорию'
        error={errors.categories}
      />
      <button
        type='submit'
        disabled={!isValid}
        className='create-product-form__button'
      >
        Создать
      </button>
    </form>
  );
};

export default CreateProductForm;
