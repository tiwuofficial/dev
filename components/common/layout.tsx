import styles from 'components/common/layout.module.css';
import Header from 'components/common/header';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const {
    children
  } = props;
  return (
    <div className={styles.wrap}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

