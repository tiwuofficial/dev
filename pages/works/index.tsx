import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/common/layout';
import styles from 'pages/works/index.module.css';
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

      <ul className={styles.ul}>
        {workList.map((work) => (
          <li key={work.id}>
            <Link href={`/works/${work.id}`}>
              <a>
                <p> {work.title}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
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
