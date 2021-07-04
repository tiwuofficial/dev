import Head from 'next/head';
import Main from 'components/common/main';
import styles from 'pages/about/index.module.css';
import { getAbout, About } from 'lib/microcms';

type Props = {
  about: About,
}

export default function AboutPage(props: Props) {
  const { about } = props;

  return (
    <Main h1="About">
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: `${about.text}`,
          }}
        />
    </Main>
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
