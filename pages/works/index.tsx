import Head from 'next/head';
import Layout from 'components/common/layout';
import styles from 'pages/about/index.module.css';
import { getWorkList, Work } from 'lib/microcms';

type Props = {
  workList: Work[],
}

export default function WorksPage(props: Props) {
  const { workList } = props;

  return (
    <Layout>
      <Head>
        <title>Works</title>
        <meta name="description" content="Works" />
      </Head>
      <h1 className={styles.h1}>Works</h1>

      {workList.map((work) => (
        <div key={work.id}>
          {work.title}
        </div>
      ))}
    </Layout>
  );
}

export const getStaticProps = async (): Promise<{
  props: Props
}> => {
  const workList = await getWorkList();
  return {
    props: {
      workList,
    },
  };
};
