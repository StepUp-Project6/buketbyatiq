import { useState } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import CardTestimoni from "../Fragments/CardTestimoni";
import { testimoni } from "../../utils/testimoni";

const TestimoniLayout = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleIconClick = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="relative flex flex-col items-center">
        <div className="absolute top-0 left-0 w-[45%] h-full bg-white lg:z-30"></div>
        {/* Container for the cards */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimoni.map((testimoni, index) => (
              <div key={index} className="min-w-full flex justify-center lg:justify-center lg:translate-x-52 xl:translate-x-72 lg:z-20">
                <CardTestimoni testimoni={testimoni} />
              </div>
            ))}
          </div>
        </div>
  
        {/* Icons for navigating through cards */}
        <div className="flex gap-2 mt-4 z-[60]">
          {testimoni.map((_, index) => (
            <MdOutlineHorizontalRule
              key={index}
              onClick={() => handleIconClick(index)}
              className={`cursor-pointer text-2xl ${
                index === currentIndex ? "text-black" : "text-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    );
};

export default TestimoniLayout;
