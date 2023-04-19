import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ratingWrapper.scss';
import Rating from '@mui/material/Rating';

const RatingWrapper = ({ rate = 0, isFrozen = true }) => {
  const [value, setValue] = useState(rate);

  return (
    <div className='rating-wrapper'>
      <Rating
        value={value}
        readOnly={isFrozen}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

RatingWrapper.propTypes = {
  rate: PropTypes.number,
  isFrozen: PropTypes.bool,
};

export default RatingWrapper;
