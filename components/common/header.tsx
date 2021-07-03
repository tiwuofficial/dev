import Link from 'next/link';
import styles from 'components/common/header.module.css';

export default function Header() {
  return (
    <header>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">
            <a className={styles.a}>
              <p>Top</p>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/about">
            <a className={styles.a}>
              <p>About</p>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/works">
            <a className={styles.a}>
              <p>Works</p>
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
