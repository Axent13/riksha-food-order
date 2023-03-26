import React from 'react';
import PropTypes from 'prop-types';
import './radioField.scss';

const RadioField = ({ options, name, onChange, value, label }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className='radio-field'>
      <label className='radio-field__title'>{label}</label>
      <div className='radio-field__input-group'>
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
    </div>
  );
};

RadioField.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
};

export default RadioField;
