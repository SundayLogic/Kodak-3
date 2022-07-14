import { Carousel } from "react-responsive-carousel";
import { Trending } from "../../typings";
import Image from "next/image";
import { useEffect, useState } from "react";
interface SlideBannerProps {
  trendingResults: Trending;
}
const SlideBanner = ({ trendingResults }: SlideBannerProps) => {
  const [movieNumber, setMovieNumber] = useState<number>(0);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const movieResult = trendingResults[movieNumber];
  const image = `${movieResult.backdrop_path}`
    ? `${baseUrl}${movieResult.backdrop_path}`
    : `${baseUrl}${movieResult.poster_path}`;
  useEffect(() => {
    setMovieNumber(
      (movieNumber = Math.floor(Math.random() * trendingResults.length))
    );
  }, [trendingResults]);
  return (
    <section>
      <div className="-z-10 h-[95vh] absolute top-0 w-screen left-0 shadow-2xl ">
        <Image src={image} layout="fill" objectFit="cover" quality="100" className="opacity-90"/>
      </div>
    </section>
  );
};
export default SlideBanner;
