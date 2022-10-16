import batmanAboutUs from "./../../assets/batman-aboutUs.png";

const AboutUs = () => {
  return (
    <>
      <div className="shadow-2xl mt-40 banner-aboutUs">
        <img
          src={batmanAboutUs}
          className="w-64 mx-auto relative z-20 -top-[88px]"
          alt="batman-aboutUs"
        />
        <span className="mx-[25rem] titleComic text-white text-6xl font-[marvel]">
          Quienes somos
        </span>
        <div className="font-[marvel] mt-10 p-20 text-2xl">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            deserunt corrupti harum accusantium magnam vero eius voluptatum
            cumque ratione id. Id distinctio dolor illum. Reprehenderit
            provident deserunt optio nulla magni! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Debitis aspernatur placeat praesentium
            at totam tenetur, voluptatem magni ratione dolores quae hic
            reiciendis commodi quaerat aliquam suscipit sit, consequuntur quidem
            tempore.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            deserunt corrupti harum accusantium magnam vero eius voluptatum
            cumque ratione id.{" "}
            <a href="/" className="text-blue-600">
              leer mas...
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
