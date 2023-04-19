import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';

const Dropdown = ({ options, displayedName = '' }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [isOpened, setIsOpened] = useState(false);
  const optionsField = useRef(null);

  const handleDropdownClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleOptionClick = (option) => {
    setIsOpened((prevState) => !prevState);
    setSelectedValue(option);
  };

  return (
    <div className='dropdown'>
      <p className='dropdown__name'>{displayedName}</p>
      <div className='dropdown__select dropdown__select_opened'>
        <div
          className={
            'dropdown__selected-value' +
            (isOpened ? ' dropdown__selected-value_opened' : '')
          }
          onClick={handleDropdownClick}
        >
          {selectedValue}
        </div>
        <div
          className={
            'dropdown__options' + (isOpened ? ' dropdown__options_opened' : '')
          }
          ref={optionsField}
        >
          {options.map((option) => {
            return (
              <div
                key={option}
                className={
                  'dropdown__option' +
                  (option === selectedValue ? ' dropdown__option_selected' : '')
                }
                onClick={() => {
                  handleOptionClick(option);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  displayedName: PropTypes.string,
  defaultText: PropTypes.string,
};

export default Dropdown;
