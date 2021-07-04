import Head from 'next/head';
import MainTop from 'components/common/mainTop';
import styles from 'pages/index.module.css';

export default function WorksPage() {
  return (
    <MainTop h1="TIWU">
      <Head>
        <title>TIWU.DEV</title>
        <meta name="description" content="tiwu.dev" />
      </Head>
    </MainTop>
  );
}
