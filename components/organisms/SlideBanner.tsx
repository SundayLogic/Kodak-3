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

  let contentReleaseDate = movieResult.release_date
    ? movieResult.release_date
    : null;

  useEffect(() => {
    setMovieNumber(
      (movieNumber = Math.floor(Math.random() * trendingResults.length))
    );
  }, [trendingResults]);

  console.log(movieResult);
  return (
    <section className="px-10 ">
      <div className="-z-10 h-[95vh] absolute top-0 w-screen left-0 shadow-2xl ">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          quality="100"
          className="opacity-65"
        />
      </div>
      <div className="flex flex-col p-2 space-y-5">
        <div className="flex flex-col  space-y-2 md:h-[40vh] justify-center lg:h-[40vh] lg:justify-end">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl lg:mb-4 text-shadow-h1 max-w-[70vw]">
            {contentTitle}
          </h1>
          <p className="sm:w-[90vw] md:w-[40vw] lg:w-[25vw] md:text-md lg:text-xl md:leading-relaxed text-shadow-h2">
            {contentOverview}
          </p>
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
