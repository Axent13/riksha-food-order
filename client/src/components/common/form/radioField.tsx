import React, { ChangeEvent } from 'react';
import './radioField.scss';

type Option = {
  name: string;
  value: string;
};

interface RadioFieldProps {
  options?: Option[];
  name?: string;
  onChange?(event: any): void;
  value?: string | string[];
  label?: string;
  error?: string;
}

const RadioField = ({
  options,
  name,
  onChange,
  value,
  label,
  error,
}: RadioFieldProps) => {
  const handleChange = ({ target }: { target: any }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getClasses = () => {
    return (
      'radio-field__input-group' +
      (error ? ' radio-field__input-group_invalid' : '')
    );
  };

  return (
    <div className='radio-field'>
      <label className='radio-field__title'>{label}</label>
      <div className={getClasses()}>
        {options.map((option) => (
          <div key={option.name + '_' + option.value}>
            <input
              className='radio-field__input'
              type='radio'
              name={name}
              id={option.name + '_' + option.value}
              checked={option.value === value}
              value={option.value}
              onChange={handleChange}
            />
            <label
              className='radio-field__label'
              htmlFor={option.name + '_' + option.value}
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
      {error && <div className='invalid-feedback '>{error}</div>}
    </div>
  );
};

export default RadioField;
