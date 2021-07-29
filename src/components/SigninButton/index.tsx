import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export function SigninButton() {
  const isUserLoggedIn = false

  return isUserLoggedIn ? (
    (
      <button type="button" className={styles.signinButton}>
        <FaGithub color="#eba417" />
        Jerson Satoru Uyekita
      </button>
    )
  ) : (
    (
      <button type="button" className={styles.signinButton}>
        <FaGithub color="#04d361" />
        Sign in with Github
        <FiX color="#73738B" className={styles.closeIcon} />
      </button>
    )
  )
}
