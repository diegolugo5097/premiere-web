import AboutUs from "../components/AboutUs/AboutUs";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="p-5">
        <Categories />
        <AboutUs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
