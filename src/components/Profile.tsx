import React from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

const Profile = () => {

  const { level } = React.useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/pauloMarolla.png" alt="Paulo marolla"/>
      <div>
        <strong>Paulo Marolla</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Lavel {level}
        </p>
      </div>
    </div>
  )
}

export default Profile
