import BrandsHover from "../organisms/BrandsHover";
import Content from "../organisms/Content";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import SlideBanner from "../organisms/SlideBanner";
import { Movies, Series, Trending } from "../../typings";

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
      </section>
      <Footer />
    </>
  );
};
export default HomeTemplate;
