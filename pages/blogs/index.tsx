import Head from 'next/head';
import Link from 'next/link';
import Main from 'components/common/main';
import styles from 'pages/blogs/index.module.css';
import { Blog, getBlogList } from 'lib/microcms';

type Props = {
  blogList: Blog[],
}

export default function BlogsPage(props: Props) {
  const { blogList } = props;

  return (
    <Main h1="Blogs">
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Blogs" />
      </Head>
      <ul className={styles.ul}>
        {blogList.map((blog) => (
          <li key={blog.id} className={styles.li}>
            <Link href={`/blogs/${blog.id}`}>
              <a><p>{blog.title}</p></a>
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
  const blogList = await getBlogList();
  return {
    props: {
      blogList,
    },
  };
};
