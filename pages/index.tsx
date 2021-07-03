import Head from 'next/head';
import Layout from 'components/common/layout';
import styles from 'pages/about/index.module.css';

export default function WorksPage() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="" />
      </Head>
      <h1 className={styles.h1}>TIWU</h1>
    </Layout>
  );
}
