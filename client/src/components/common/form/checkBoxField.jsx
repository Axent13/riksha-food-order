import React from 'react';
import PropTypes from 'prop-types';
import './checkBoxField.scss';

const CheckBoxField = ({ name, value, onChange, children }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };

  return (
    <div className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        value=''
        id={name}
        onChange={handleChange}
        checked={value}
      />
      <label className='checkbox__label ' htmlFor={name}>
        {children}
      </label>
    </div>
  );
};
CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CheckBoxField;
