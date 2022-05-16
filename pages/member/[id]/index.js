import Layout from "/components/layout";
import Link from "next/link";
// import Image from "next/image";

const castMember = ({ castMember }) => {
  console.log(castMember);
  return (
    <Layout>
      <main className="container">
        <h1>{castMember.name}</h1>
        {/* <Image
          src={`/images/${castMember.slug}.svg`}
          alt={castMember.name}
          width={600}
          height={800}
        /> */}
        <p>{castMember.bio}</p>
        <Link href="/">
          <button>Back to HOME</button>
        </Link>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch("https://pixelprowess.com/i/stargazers/data.json");
  const data = await res.json();
  const castMember = data.filter((item) => item.id == context.params.id);

  return {
    props: {
      castMember: castMember[0]
    }
  };
};

export default castMember;

// export async function getServerSideProps() {
//   const res = await fetch(`${config.lego.host}/api/cookie`); // <-- How to make this work?

//   const data = await res;
//   console.log('CP data res :>>', res);
//   // Pass data to the page via props
//   return { props: { data: 'HeLLOOO' || '' } };

//   // return { props: { myCookie: req.cookies.myCookie || '' } };
// }

// const createMasterCookie = (req, res) => {
//   const cookies = req.cookies;
//   const masterCookie = {};

//   if (cookies) {
//     for (const item of Object.keys(cookies)) {
//       if (item !== 'master-cookie') {
//         masterCookie[item] = cookies[item];
//       }
//     }
//   }
