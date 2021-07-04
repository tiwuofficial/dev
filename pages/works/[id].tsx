import Image from 'next/image';
import Head from 'next/head';
import Main from 'components/common/main';
import { getWorkList, getWork, Work } from 'lib/microcms';
import styles from 'pages/works/[id].module.css';

type Props = {
  work: Work,
}

export default function WorkPage(props: Props) {
  const { work } = props;

  const width = 600;
  const height = 100;
  const quality = 100;

  return (
    <Main h1={work.title}>
      <Head>
        <title>{work.title}</title>
        <meta name="description" content={`${work.title} - tiwu.dev`} />
      </Head>
      <div className={styles.wrap}>
        {work.icon ? (
          <Image
          src={`${work.icon.url}?w=${width}&h=${height}&fit=crop&q=${quality}`}
          quality={quality}
          alt={work.title}
          width={width}
          height={height}
          />
        ) : (
          <p className={styles.title}>{work.title}</p>
        )}
        <p className={styles.linkWrap}>
          <a href={work.url} className={styles.link} target="_blank" rel="noreferrer">{work.url}</a>
        </p>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: `${work.description}`,
          }}
        />
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
