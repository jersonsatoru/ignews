import { SigninButton } from '../SigninButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt="Logo!" />
        <nav>
          <a href="" className={styles.active}>Home</a>
          <a href="">Batata</a>
        </nav>
        <SigninButton />
      </div>
    </header>
  )
}
