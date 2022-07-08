import { Text, Link, Spacer } from '@nextui-org/react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Text>Made with Vite + React -</Text>
      <Spacer x={0.2} />
      <Link
        href="https://github.com/aphiwadChhoeun/vitejs-trivia-game">
        Github
      </Link>
    </div>
  );
}
