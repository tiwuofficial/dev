import Head from 'next/head';
import Layout from 'components/common/layout';
import styles from 'pages/about/index.module.css';

export default function WorksPage() {
  return (
    <Layout>
      <Head>
        <title>TIWU.DEV</title>
        <meta name="description" content="tiwu.dev" />
      </Head>
      <h1 className={styles.h1}>TIWU</h1>
    </Layout>
  );
}
