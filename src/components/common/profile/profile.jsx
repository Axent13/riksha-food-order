import React from 'react';
import profileIcon from '../../../assets/profile-icon.png';
import './profile.scss';

const Profile = () => {
  return (
    <div className='profile'>
      <img className='profile__icon' src={profileIcon} alt='Ваш аватар' />
    </div>
  );
};

export default Profile;
