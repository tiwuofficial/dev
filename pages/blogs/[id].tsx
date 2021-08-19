import Head from 'next/head';
import MainBlog from 'components/common/mainBlog';
import { Blog, getBlogList, getBlog } from 'lib/microcms';
import styles from 'pages/blogs/[id].module.css';

type Props = {
  blog: Blog,
}

export default function BlogPage(props: Props) {
  const { blog } = props;

  return (
    <MainBlog h1={blog.title}>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={`${blog.title} - tiwu.dev`} />
        <meta property="og:url" content={`https://tiwu.dev/blogs/${blog.id}`} />
        <meta property="og:title" content={`${blog.title} - tiwu.dev`} />
      </Head>
      {blog.bodyList.map((body, index) => (
        <div
          key={index}
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        />
      ))}
    </MainBlog>
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
  const blogList = await getBlogList();
  const paths = blogList.map((blog) => ({
    params: {
      id: blog.id,
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
    blog: Blog;
  };
}> {
  const blog = await getBlog(params.id);
  return {
    props: {
      blog,
    },
  };
}
