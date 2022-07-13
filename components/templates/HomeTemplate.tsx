import BrandsHover from "../organisms/BrandsHover";
import Content from "../organisms/Content";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
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
  console.log("Hello");
  console.log(results.trending);
  return (
    <>
      <Header />
      <Hero />
      <SlideBanner />
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
