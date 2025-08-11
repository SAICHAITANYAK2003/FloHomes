import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const showPrevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const showNextProject = () => {
    setCurrentIndex((prev) =>   (prev + 1) % projectsData.length);
  };
  return (
    <div id="projects" className="my-20 px-4 md:px-24 lg:px-32 overflow-hidden">
      <h1 className="text-center mt-4 text-4xl font-semibold">
        Projects <span className="font-light underline">Completed</span>
      </h1>
      <p className="text-center mt-4 text-gray-500">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      <div className="flex  justify-end mt-8 gap-4">
        <button
          onClick={showPrevProject}
          aria-label="move back"
          className="cursor-pointer bg-blue-100 text-blue-900 rounded-md p-1.5"
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          onClick={showNextProject}
          aria-label="move forward"
          className="cursor-pointer bg-blue-100 text-blue-900 rounded-md p-1.5"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
      {/* Projects Content */}

      <div className="overflow-hidden mt-5 md:py-10 ">
        <div
          className="flex  gap-6 ransition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}% )`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="w-full shrink-0 sm:w-1/4 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-4 rounded-md"
              />

              <div className="absolute flex justify-center right-0 left-0 bottom-0 ">
                <div className="bg-white  px-4 py-3 rounded-lg shadow-md">
                  <h1>{project.title}</h1>

                  <p className="text-gray-500 mt-2">
                    {project.price} <span>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
