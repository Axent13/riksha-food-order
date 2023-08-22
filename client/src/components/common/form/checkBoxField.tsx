import React from 'react';
import './checkBoxField.scss';

interface CheckBoxFieldProps {
  name?: string;
  value?: boolean;
  onChange?({ name, value }: { name: string; value: boolean }): void;
  children?: React.ReactNode;
}

const CheckBoxField = ({
  name,
  value,
  onChange,
  children,
}: CheckBoxFieldProps) => {
  const handleChange = () => {
    onChange({ name, value: !value });
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

export default CheckBoxField;
