import Head from 'next/head'
import { getWorkList, Work } from 'lib/microcms';
import Layout from 'components/common/layout';
import styles from 'pages/index.module.css';

type Props = {
  workList: Work[],
}

export default function Index(props: Props) {
  const { workList } = props;

  return (
    <Layout>
      <Head>
        <title>tiwu.dev</title>
      </Head>

      <h1 className={styles.h1}>TIWU DEV</h1>

      {workList.map((work) => (
        <div key={work.id}>
          {work.title}
        </div>
      ))}
    </Layout>
  )
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
