import Head from "next/head";
import Layout from "../components/layout";
import { CastList } from "../components/CastList";

export default function Home({ cast }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>MY App</title>
        </Head>
        <main className="container">
          <h1>Here is a list</h1>
          <CastList cast={cast} />
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  // https://stackoverflow.com/questions/44342226/next-js-error-only-absolute-urls-are-supported
  // const protocol = req.headers["x-forwarded-proto"] || "http";
  // const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
  // const baseUrl = "http://localhost:3000/";
  // const res = await fetch(baseUrl + "/api/hello");
  const res = await fetch("https://pixelprowess.com/i/stargazers/data.json");
  const data = await res.json();
  return {
    props: {
      cast: data
    }
  };
};

// <main className={styles.main}>
//   <p className={styles.description}>
//     Get started by editing{" "}
//     <code className={styles.code}>pages/index.js</code>
//   </p>

//   <div className={styles.grid}></div>
// </main>
