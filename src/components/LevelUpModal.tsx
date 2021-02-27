import React from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

const LevelUpModal = () => {

  const {level, closeLevelUpModal} = React.useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alvançou um novo level.</p>
          <button onClick={closeLevelUpModal} type="button">
            <img src="/icons/close.svg" alt="Fecha Modal"/>
          </button>
      </div>
    </div>
   
  )
}

export default LevelUpModal
