import styles from 'components/common/mainBlog.module.css';
import Layout from 'components/common/layout';
import H1 from 'components/common/h1';

type Props = {
  children: React.ReactNode;
  h1: string
};

export default function MainBlog(props: Props) {
  const {
    children, h1
  } = props;
  return (
    <Layout>
      <main className={styles.main}>
        <H1>{h1}</H1>
        <div className={styles.children}>
          {children}
        </div>
      </main>
    </Layout>
  );
};

