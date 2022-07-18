import { Carousel } from "react-responsive-carousel";
import { Trending } from "../../typings";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InformationCircleIcon, PlayIcon } from "@heroicons/react/solid";
interface SlideBannerProps {
  trendingResults: Trending;
}
interface ContentResult {
  content: {
    contentTitle: string;
    contentOverview: string;
    contentDuration?: string;
    contentRealeaseDate: string;
  };
}
const SlideBanner = ({ trendingResults }: SlideBannerProps) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  let [movieNumber, setMovieNumber] = useState<number | null>(0);
  const movieResult = trendingResults[movieNumber];
  const image = `${movieResult.backdrop_path}`
    ? `${baseUrl}${movieResult.backdrop_path}`
    : `${baseUrl}${movieResult.poster_path}`;

  let contentTitle = movieResult.title ? movieResult.title : movieResult.name;

  let contentOverview = movieResult.overview ? movieResult.overview : null;

  useEffect(() => {
    setMovieNumber(
      (movieNumber = Math.floor(Math.random() * trendingResults.length))
    );
  }, [trendingResults]);
  return (
    <section>
      <div className="-z-10 h-[75vh] lg:h-[90vh] absolute top-0 w-screen left-0 shadow-2xl ">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          quality="100"
          className="opacity-50 md:opacity-80"
        />
      </div>
      <div className="flex flex-col justify-center items-center px-10 md:px-14 space-y-5 bg-pink-900/40 md:items-start h-[72vh]">
        <div className="flex flex-col mt-14 bg-blue-900/80 space-y-4">
          <h1 className="text-2xl font-bold tracking-wider text-center bg-purple-900">{contentTitle}</h1>
          <p className="bg-slate-900 space-tracking-wider">{contentOverview}</p>
        </div>
        <div className="flex space-x-4">
          <button className="bannerBtn">
            <PlayIcon className="bannerIcon" />
            <h1>Play</h1>
          </button>
          <button className="bannerBtn">
            <InformationCircleIcon className="bannerIcon" />
            <h1>More Info</h1>
          </button>
        </div>
      </div>
    </section>
  );
};
export default SlideBanner;
