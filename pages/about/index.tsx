import Head from 'next/head';
import Layout from 'components/common/layout';
import styles from 'pages/about/index.module.css';
import { getAbout, About } from 'lib/microcms';

type Props = {
  about: About,
}

export default function AboutPage(props: Props) {
  const { about } = props;

  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>
        <h1 className={styles.h1}>About</h1>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: `${about.text}`,
          }}
        />
    </Layout>
  );
}

export const getStaticProps = async (): Promise<{
  props: Props
}> => {
  const about = await getAbout();
  return {
    props: {
      about,
    },
  };
};
