import React from 'react';
import PropTypes from 'prop-types';
import './textAreaField.scss';

const TextAreaField = ({ name, value, onChange, error, placeholder }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return 'text-area-field' + (error ? ' text-area-field_errored' : '');
  };

  return (
    <div>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className={getInputClasses()}
        rows={5}
        placeholder={placeholder}
      />
      {error && <div className='text-area-field__error'>{error}</div>}
    </div>
  );
};

TextAreaField.defaultProps = {
  type: 'text',
};

TextAreaField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextAreaField;
