import { Link } from "react-router-dom";
import banner from "./../../assets/banner.jpg";
import logo from "./../../assets/logo.png";

const Header = ({ hidden = false }) => {
  return (
    <>
      <div className="w-full bg-yellow-500 p-5 h-20">
        <ul className="flex flex-wrap text-white gap-4 justify-center titleComic text-2xl">
          <li className="hover:text-3xl hover:text-red-600">
            <Link to="/">Inicio</Link>
          </li>
          <li className="hover:text-3xl hover:text-red-600">
            <Link to="/visitUs">Visitanos</Link>
          </li>
          <li>
            <Link to="/">
              <img
                className="mt-10 relative mt-0 w-52 z-20"
                src={logo}
                alt="logo-premiere"
              />
            </Link>
          </li>
          <li className="hover:text-3xl hover:text-red-600">
            <Link to="#">Quienes Somos</Link>
          </li>
          <li className="hover:text-3xl hover:text-red-600">
            <Link to="#">Galeria</Link>
          </li>
        </ul>
      </div>
      <div hidden={hidden} className="w-full blur-sm relative z-10">
        <img src={banner} alt="banner" />
      </div>
    </>
  );
};

export default Header;
