import Head from 'next/head';
import Main from 'components/common/main';
import { getWorkList, getWork, Work } from 'lib/microcms';
import styles from './[id].module.css';

type Props = {
  work: Work,
}

export default function WorkPage(props: Props) {
  const { work } = props;

  return (
    <Main h1={work.title}>
      <div>
        <Head>
          <title>{work.title}</title>
          <meta name="description" content={`${work.title} - tiwu.dev`} />
        </Head>
        <p>hoge</p>
      </div>
    </Main>
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
