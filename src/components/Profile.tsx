import React from 'react'

import styles from '../styles/components/Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/pauloMarolla.png" alt="Paulo marolla"/>
      <div>
        <strong>Paulo Marolla</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Lavel 1
        </p>
      </div>
    </div>
  )
}

export default Profile
