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
      <SlideBanner trendingResults={results.trending}/>
      <BrandsHover />
      <section>
        <Content />
        <Content />
        <Content />
        <Content />
      </section>
      <Footer />
    </>
  );
};
export default HomeTemplate;
