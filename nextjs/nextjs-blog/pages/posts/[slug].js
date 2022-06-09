import Head from "next/head";

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://www.example.com/api/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  // Set fallback to blocking. Now any new post added post build will SSR
  // to ensure SEO. It will then be static for all subsequent requests
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://www.example.com/api/blog/${params.slug}`);
  const data = await res.json();

  return {
    props: {
      blog: data,
    },
  };
}

function BlogPost({ blog }) {
  return (
    <>
      <Head>
        <title>{blog.title} | My Site</title>
      </Head>
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.text}</p>
      </div>
    </>
  );
}

export default BlogPost;

export async function getServerSideProps({ query }) {
  const res = await fetch(`https://www.example.com/api/blog/${query.slug}`);
  const data = await res.json();

  return {
    props: {
      blog: data,
    },
  };
}
