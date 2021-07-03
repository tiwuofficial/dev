import Head from 'next/head';
import Layout from 'components/common/layout';
import { getWorkList, getWork, Work } from 'lib/microcms';
import styles from './[id].module.css';

type Props = {
  work: Work,
}

export default function WorkPage(props: Props) {
  const { work } = props;

  return (
    <Layout>
      <div>
        <Head>
          <title>{work.title}</title>
          <meta name="description" content={`${work.title} - tiwu.dev`} />
        </Head>
        <h1 className={styles.h1}>{work.title}</h1>
      </div>
    </Layout>
  );
}

export async function getStaticPaths(): Promise<{
  paths: {
      params: {
        id: string
      };
  }[];
  fallback: boolean;
}> {
  const workList = await getWorkList();
  const paths = workList.map((work) => ({
    params: {
      id: work.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

type Params = {
  params: {
    id: string
  }
}

export async function getStaticProps({ params } : Params): Promise<{
  props: {
      work: Work;
  };
}> {
  const work = await getWork(params.id);
  return {
    props: {
      work,
    },
  };
}
