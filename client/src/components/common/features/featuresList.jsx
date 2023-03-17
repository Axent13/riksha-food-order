import React from 'react';
import Feature from './feature';
import { featureInfo } from './featureInfo';
import './featuresList.scss';

const FeaturesList = () => {
  if (featureInfo) {
    return (
      <div className='features-list'>
        {featureInfo.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    );
  }
};

export default FeaturesList;
