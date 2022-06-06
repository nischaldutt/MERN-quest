import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>hello nextjs!</title>
      </Head>
      <h1>hello nextjs!</h1>
      <h2>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
