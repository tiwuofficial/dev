import styles from 'components/common/layout.module.css';
import Header from 'components/common/header';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const {
    children
  } = props;

  useEffect(()=>{
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', setFillHeight);
    setFillHeight();
  }, [])

  return (
    <div className={styles.wrap}>
      <Header />
      {children}
    </div>
  );
};

