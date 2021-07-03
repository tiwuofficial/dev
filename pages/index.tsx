import Head from 'next/head'
import { getWorkList, Work } from 'lib/microcms';
import styles from 'pages/index.module.css';

type Props = {
  workList: Work[],
}

export default function Home(props: Props) {
  const { workList } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>tiwu.dev</title>
      </Head>

      <main>
        <h1>TIWU DEV</h1>

        {workList.map((work) => (
          <div key={work.id}>
            {work.title}
          </div>
        ))}
      </main>
    </div>
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
