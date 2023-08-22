import React from 'react';
import './feature.scss';

interface FeatureProps {
  nameImg: string;
  icon?: string;
  mainText: string;
  subText?: string;
}

const Feature = ({ nameImg, icon, mainText, subText }: FeatureProps) => {
  return (
    <div className='feature'>
      <img className='feature__name' src={nameImg} alt={mainText} />
      <div className='feature__circle'>
        <img className='feature__icon' src={icon} />
      </div>
      <p className='feature__text-main'>{mainText}</p>
      <p className='feature__text-sub'>{subText}</p>
    </div>
  );
};

export default Feature;
