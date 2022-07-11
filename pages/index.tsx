import type { NextPage } from "next";
import Head from "next/head";
import HomeTemplate from "../components/templates/HomeTemplate";
import requests from "../utils/requests";

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

export const getServerSideProps = async () => {
  const [
    trending,
    moviesPopular,
    moviesTopRated,
    moviesLatest,
    seriesPopular,
    seriesTopRated,
    seriesLatest,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchMoviePopular).then((res) => res.json()),
    fetch(requests.fetchMovieTopRated).then((res) => res.json()),
    fetch(requests.fetchMovieLatest).then((res) => res.json()),
    fetch(requests.fetchSeriesPopular).then((res) => res.json()),
    fetch(requests.fetchSeriesTopRated).then((res) => res.json()),
    fetch(requests.fetchSeriesLatest).then((res) => res.json()),
  ]);
  return {
    props: {
      trending: trending.results,
      moviesPopular: moviesPopular.results,
      moviesTopRated: moviesTopRated.results,
      moviesLatest: moviesLatest.results,
      seriesPopular: seriesPopular.results,
      seriesTopRated: seriesTopRated.results,
      seriesLatest: seriesLatest.results,
    },
  };
};
