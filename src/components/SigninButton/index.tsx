import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useSession, signIn, signOut } from 'next-auth/client';

import styles from './styles.module.scss';

export function SigninButton() {
  const [session] = useSession()

  return session ? (
    (
      <button type="button" className={styles.signinButton}>
        <FaGithub color="#04d361" />
        {session.user.name}
        <FiX color="#73738B" className={styles.closeIcon} onClick={() => signOut()} />
      </button>
    )
  ) : (
    (
      <button type="button" className={styles.signinButton} onClick={() => signIn('Github')}>
        <FaGithub color="#eba417" />
        Sign in with Github
      </button>

    )
  )
}
