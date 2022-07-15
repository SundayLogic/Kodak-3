import { Carousel } from "react-responsive-carousel";
import { Trending } from "../../typings";
import Image from "next/image";
import { useEffect, useState } from "react";
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
    <section className="bg-green-900">
      <div className="-z-10 h-[95vh] absolute top-0 w-screen left-0 shadow-2xl ">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          quality="100"
          className="opacity-90"
        />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex flex-col bg-orange-700 space-y-2 lg:h-[40vh] lg:justify-end">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl lg:mb-4">
            {contentTitle}
          </h1>
          <p className="sm:w-[90vw] md:w-[40vw] lg:w-[25vw] md:text-md lg:text-xl md:leading-relaxed">
            {contentOverview}
          </p>
        </div>
        <div className="flex space-x-3">
            <button className="bannerBtn">Play</button>
            <button className="bannerBtn">More Info</button>
        </div>
      </div>
    </section>
  );
};
export default SlideBanner;
