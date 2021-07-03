import styles from 'components/common/layout.module.css';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const {
    children
  } = props;
  return (
    <div className={styles.wrap}>
      <header>header</header>
      <main className={styles.main}>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

