import BrandsHover from "../organisms/BrandsHover";
import Content from "../organisms/Content";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import SlideBanner from "../organisms/SlideBanner";

const HomeTemplate = () => {
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
