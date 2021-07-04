import styles from 'components/common/h1.module.css';

type Props = {
  children: React.ReactNode;
};

export default function H1(props: Props) {
  const {
    children
  } = props;
  return (
    <h1 className={styles.h1}>{children}</h1>
  );
};

