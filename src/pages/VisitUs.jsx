import Header from "../components/Header/Header";
import GoogleMaps from "simple-react-google-maps";
import Footer from "../components/Footer/Footer";

const VisitUs = () => {
  return (
    <>
      <Header hidden={true} />
      <div className="banner-visitUs">
        <h1 className="titleComic text-6xl text-center pt-20">
          VEN Y VISITANOS
        </h1>
        <div className="map-google">
          <GoogleMaps
            apiKey={"AIzaSyBO1Avq36RnbOP5akjyt4uAxvRMkAAQoJ4"}
            style={{
              height: "467px",
              width: "103%",
              position: "relative",
              overflow: "hidden",
              borderRadius: "94px",
            }}
            zoom={20}
            center={{ lat: 4.620274163833877, lng: -75.63427677790976 }}
            markers={{ lat: 4.620274163833877, lng: -75.63427677790976 }} //optional
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisitUs;
