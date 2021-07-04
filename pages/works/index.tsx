import Head from 'next/head';
import Link from 'next/link';
import Main from 'components/common/main';
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
          <li key={work.id}>
            <Link href={`/works/${work.id}`}>
              <a>
                <p> {work.title}</p>
              </a>
            </Link>
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
