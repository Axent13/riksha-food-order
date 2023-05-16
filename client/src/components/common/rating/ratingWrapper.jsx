import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ratingWrapper.scss';
import Rating from '@mui/material/Rating';

const RatingWrapper = ({ rate, isFrozen = true, onRatingClick }) => {
  const [value, setValue] = useState(rate);

  return (
    <div className='rating-wrapper'>
      <Rating
        value={value}
        readOnly={isFrozen}
        onChange={(event, newValue) => {
          setValue(newValue);
          onRatingClick(newValue);
        }}
      />
    </div>
  );
};

RatingWrapper.propTypes = {
  rate: PropTypes.number,
  isFrozen: PropTypes.bool,
  onRatingClick: PropTypes.func,
};

export default RatingWrapper;
