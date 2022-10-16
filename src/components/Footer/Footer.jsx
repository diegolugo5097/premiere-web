import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-yellow-500 pt-5">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-2 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <div className="text-2xl titleComic uppercase text-black">
              Navegacion
            </div>
            <Link className="my-3 block" to="/#">
              Inicio <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" to="/visitUs">
              Visitanos <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" to="/#">
              Quienes somos <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" to="/#">
              Galeria <span className="text-teal-600 text-xs p-1"></span>
            </Link>
          </div>
          <div className="p-5">
            <div className="titleComic text-2xl uppercase text-black">
              Contactanos
            </div>
            <span className="my-3 block">
              631001 Cll 6 14-46 altos, Circasia, Quindío
              <span className="text-teal-600 text-xs p-1"></span>
            </span>
            <span className="my-3 block">
              3147648668
              <span className="text-teal-600 text-xs p-1"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center"
        >
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex"></div>
          <div className="my-5">© Copyright 2022. All Rights Reserved.</div>
        </div>
      </div>

      <Link to="/">
        <img
          className="mt-12 mb-12 relative mt-0 w-52 z-20 mx-auto"
          src={logo}
          alt="logo-premiere"
        />
      </Link>
    </>
  );
};

export default Footer;
