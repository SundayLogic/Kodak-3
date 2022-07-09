import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeTemplate from "../components/templates/HomeTemplate";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kodak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeTemplate />
      </main>
    </div>
  );
};

export default Home;
