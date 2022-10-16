import categories from "../../data/categories";
import turtle from "./../../assets/titleCategories.png";

const Categories = () => {
  return (
    <>
      <div className="banner-categories shadow-2xl">
        <span className="mt-20 text-white flex flex-wrap titleTurtle flex justify-center p-10 text-7xl font-[marvel]">
          Que te servimos
          <img
            src={turtle}
            className="xl:w-52 w-[10rem] ml-[6rem] -mt-[13rem] absolute xl:ml-[40rem] xl:-mt-52 z-10"
            alt="imageCategory"
          />
        </span>
        <div className="pb-20 flex w-full flex-wrap justify-around w-full">
          {categories.map((category) => {
            return (
              <>
                <a href="#">
                  <div className="mt-10 bg-white shadow-2xl w-100">
                    <img
                      className="w-auto xl:h-96 h-64"
                      src={category.img}
                      alt=""
                    />
                    <p className="titleComic text-2xl text-center">
                      {category.name}
                    </p>
                  </div>
                </a>
              </>
            );
          })}
        </div>
        <hr className="w-full mt-20" />
      </div>
    </>
  );
};

export default Categories;
