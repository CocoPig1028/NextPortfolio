import Head from "next/head";
import Layout from "../components/layout.js";
import Contact from "../components/contact/contact.js";

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>CocoPig 포트폴리오</title>
        <meta name="description" content="매일매일 빡코딩" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact></Contact>
    </Layout>
  );
}
