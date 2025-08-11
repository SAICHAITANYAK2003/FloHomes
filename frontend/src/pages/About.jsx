import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="py-16 px-4 md:px-24 scroll-smooth" id="about">
      <h1 className="text-center mt-4 text-4xl font-semibold">
        About <span className="font-light underline">Our Brand</span>
      </h1>
      <p className="text-center mt-4 text-gray-500">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      {/* About Content */}
      <div className="mt-10 flex flex-col lg:flex-row items-center gap-8 ">
        <img
          src={assets.brand_img}
          alt="about image"
          className=" w-md lg:w-lg"
        />
        <div className="flex-1 flex flex-col mt-10 ml-12">
          <div className="grid grid-cols-2 justify-between gap-7">
            <div className="flex flex-col items-start ">
              <h1 className="text-3xl font-medium">10+</h1>
              <p className="text-gray-500">Years of Excellence</p>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-medium">12+</h1>
              <p className="text-gray-500">Projects Completed</p>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-medium">20+</h1>
              <p className="text-gray-500">Mn. Sq. Ft. Delivered</p>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-medium">25+</h1>
              <p className="text-gray-500">Ongoing Projects</p>
            </div>
          </div>

          <p className="mt-10 text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <button className="px-5 py-2.5 bg-blue-600 rounded-md text-white w-fit mt-4">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
