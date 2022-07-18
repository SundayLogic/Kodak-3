import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import SlideBanner from "../organisms/SlideBanner";
import { Movies, Series, Trending } from "../../typings";
import ContentMovies from "../organisms/ContentMovies";
import ContentSeries from "../organisms/ContentSeries";
interface HomeTemplateProps {
  results: {
    trending: Trending;
    moviesPopular: [Movies];
    moviesTopRated: [Movies];
    moviesLatest: [Movies];
    seriesPopular: [Series];
    seriesTopRated: [Series];
    seriesLatest: [Series];
  };
}
const HomeTemplate = ({ results }: HomeTemplateProps) => {
  return (
    <>
        <Header />
      <SlideBanner trendingResults={results.trending} />
      <section className="">
        <section className="bg-blue-900/30 space-y-3">
          <ContentMovies />
          <ContentMovies />
          <ContentMovies />
          <ContentMovies />
        </section>
        <section className=" bg-blue-900/30 space-y-3">
          <ContentSeries />
          <ContentSeries />
          <ContentSeries />
          <ContentSeries />
        </section>
      </section>
      <Footer />
    </>
  );
};
export default HomeTemplate;
