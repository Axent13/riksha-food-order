import React from 'react';
import PropTypes from 'prop-types';
import './textField.scss';

const TextField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  placeholder,
}) => {
  const handleChange = ({ target }) => {
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
        {error && <div className='invalid-feedback '>{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextField;
