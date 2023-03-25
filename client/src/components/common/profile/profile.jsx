import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../../assets/profile-icon.png';
import './profile.scss';

const Profile = () => {
  return (
    <Link to='/login'>
      <div className='profile'>
        <img className='profile__icon' src={profileIcon} alt='Ваш аватар' />
      </div>
    </Link>
  );
};

export default Profile;
