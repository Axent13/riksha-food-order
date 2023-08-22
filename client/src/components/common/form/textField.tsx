import React, { ChangeEvent } from 'react';
import './textField.scss';

interface TextFieldProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string | number;
  onChange?(event: any): void;
  error?: string;
  placeholder?: string;
}

const TextField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  placeholder,
}: TextFieldProps) => {
  const handleChange = ({ target }: { target: any }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return 'text-field__input' + (error ? ' text-field__input_invalid' : '');
  };

  return (
    <div className='text-field'>
      <label className='text-field__label' htmlFor={name}>
        {label}
      </label>
      <div className='text-field__input-group'>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
          placeholder={placeholder}
        />
        {error && <div className='text-field__error'>{error}</div>}
      </div>
    </div>
  );
};

export default TextField;
