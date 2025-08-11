 
import { testimonialsData } from "../assets/assets";
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div>
      <div className="py-16 px-4   md:px-24 scroll-smooth" id="testimonials">
        <h1 className="text-center mt-4 text-4xl font-semibold">
          Customer <span className="font-light underline">Testimonials</span>
        </h1>
        <p className="text-center mt-4 text-gray-500">
          Real Stories from Those Who Found Home with Us
        </p>
        <div className="flex flex-wrap justify-center gap-8   mt-10">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-300 py-9 px-5 rounded-md shadow-lg w-full sm:w-[300px] md:w-[350px]"
            >
              <img src={item.image} alt={item.name} className="w-20" />
              <h1 className="mt-4 font-medium text-[21px]">{item.name}</h1>
              <p className="mt-4 text-gray-500">{item.title}</p>

              <p className="mt-4 flex space-x-1.5">
                {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                  <FaStar key={i} className="text-orange-500" />
                ))}
              </p>

              <p className="text-center mt-4 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
