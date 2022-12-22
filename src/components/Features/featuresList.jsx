import React from 'react';
import Feature from './feature';
import { featureInfo } from './featureInfo';

const FeaturesList = () => {
  if (featureInfo) {
    return featureInfo.map((feature, index) => (
      <Feature key={index} {...feature} />
    ));
  } else {
    return 'Loading features...';
  }
};

export default FeaturesList;
