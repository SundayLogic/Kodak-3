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
<<<<<<< HEAD

  return (
    <section className="px-10">
      <div className="-z-10 md:h-[60vh] h-[53vh] lg:h-[75vh] absolute top-0 w-screen left-0 shadow-2xl ">
=======
  return (
    <section>
      <div className="-z-10 h-[75vh] lg:h-[90vh] absolute top-0 w-screen left-0 shadow-2xl ">
>>>>>>> develpment
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          quality="100"
          className="opacity-50 md:opacity-80"
        />
      </div>
<<<<<<< HEAD
      <div className=" flex flex-col p-2 space-y-5 mt-[2.5vh] md:mt-12 bg-orange-900/30 h-[48vh] md:h-[65vh] pt-12">
        <div className="flex flex-col  space-y-2 md:h-[40vh] justify-center lg:h-[40vh] lg:justify-end">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl lg:mb-4 text-shadow-h1 max-w-[80vw] md:max-w-[50vw]">
            {contentTitle}
          </h1>
          <p className="sm:w-[90vw] md:w-[40vw] lg:w-[25vw] md:text-md lg:text-xl md:leading-relaxed text-shadow-h2 overflow-ellipsis">
            {contentOverview}
          </p>
=======
      <div className="flex flex-col justify-center items-center px-10 md:px-14 space-y-5 bg-pink-900/40 md:items-start h-[72vh]">
        <div className="flex flex-col mt-14 bg-blue-900/80 space-y-4">
          <h1 className="text-2xl font-bold tracking-wider text-center bg-purple-900">{contentTitle}</h1>
          <p className="bg-slate-900 space-tracking-wider">{contentOverview}</p>
>>>>>>> develpment
        </div>
        <div className="flex justify-center md:justify-start space-x-4">
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
