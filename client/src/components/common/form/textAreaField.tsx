import React, { ChangeEvent } from 'react';
import './textAreaField.scss';

interface TextAreaFieldProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?(event: any): void;
  error?: string;
  placeholder?: string;
}

const TextAreaField = ({
  name,
  value,
  onChange,
  error,
  placeholder,
  label,
}: TextAreaFieldProps) => {
  const handleChange = ({ target }: { target: any }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return 'text-area-field' + (error ? ' text-area-field_errored' : '');
  };

  return (
    <div>
      <label className='text-field__label' htmlFor={name}>
        {label}
      </label>
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

export default TextAreaField;
