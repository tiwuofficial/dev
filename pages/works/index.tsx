import Head from 'next/head';
import Main from 'components/common/main';
import WorkItem from 'components/work/item';
import styles from 'pages/works/index.module.css';
import { getWorkList, Work } from 'lib/microcms';

type Props = {
  workList: Work[],
}

export default function WorksPage(props: Props) {
  const { workList } = props;

  return (
    <Main h1="Works">
      <Head>
        <title>Works</title>
        <meta name="description" content="Works" />
      </Head>
      <ul className={styles.ul}>
        {workList.map((work) => (
          <li key={work.id} className={styles.li}>
            <WorkItem work={work} />
          </li>
        ))}
      </ul>
    </Main>
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
