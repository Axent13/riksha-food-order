import React, { useState } from 'react';
import './ratingWrapper.scss';
import Rating from '@mui/material/Rating';

interface RatingWrapperProps {
  rate?: number;
  isFrozen?: boolean;
  onRatingClick?: (newValue: number) => void;
}

const RatingWrapper = ({
  rate,
  isFrozen = true,
  onRatingClick,
}: RatingWrapperProps) => {
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

export default RatingWrapper;
