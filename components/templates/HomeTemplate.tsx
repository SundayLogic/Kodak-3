import BrandsHover from "../organisms/BrandsHover";
import Content from "../organisms/Content";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import SlideBanner from "../organisms/SlideBanner";

const HomeTemplate = () => {
  return (
    <>
      <Header />
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

