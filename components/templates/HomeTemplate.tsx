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
<<<<<<< HEAD
      <div className="mt-0">
        <Header />
      </div>
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
=======
      <Header />
      <SlideBanner trendingResults={results.trending} />
      <section className="mt-96 bg-blue-900/30 space-y-3">
        <Content
          contentResults={results.moviesPopular}
          contentTitle={"Popular Movies"}
          contentType={"movie"}
        />
        <Content
          contentResults={results.moviesTopRated}
          contentTitle={"Top Rated Movies"}
          contentType={"movie"}
        />
        <Content
          contentResults={results.moviesLatest}
          contentTitle={"Latest Movies"}
          contentType={"movie"}
        />
        <Content
          contentResults={results.seriesPopular}
          title={"Popular Series"}
          contentType={"serie"}
        />
        <Content
          contentResults={results.seriesTopRated}
          title={"Top Rated Series"}
          contentType={"serie"}
        />
        <Content
          contentResults={results.seriesLatest}
          title={"Latest Series"}
          contentType={"serie"}
        />
>>>>>>> develpment
      </section>
      <Footer />
    </>
  );
};
export default HomeTemplate;
