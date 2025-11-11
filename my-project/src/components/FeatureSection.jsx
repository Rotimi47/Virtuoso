import React, { useRef } from "react";
import gsap from "gsap";
import { features } from "../constants"

const FeatureSection = () => {
      const boxRef = useRef([]); // Array to hold refs for each feature box

  const handleMouseEnter = (index) => {
    gsap.to(boxRef.current[index], {
      scale: 1.1,       // increase size by 10%
      duration: 0.3,    // animation time
      ease: "power1.out"
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(boxRef.current[index], {
      scale: 1,         // return to normal size
      duration: 0.3,
      ease: "power1.inOut"
    });
  };




  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xm font-medium px-2 py-1 uppercase">
                feature
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                Easily build <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> your code</span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20"  >
            {features.map((feature, index) => (
                <div 
                key={index} 
                ref={(el) => (boxRef.current[index] = el)}  // store this div's ref
                 onMouseEnter={() => handleMouseEnter(index)}// pass the correct index
                 onMouseLeave={() => handleMouseLeave(index)} // pass the correct index
                className="w-full sm:1/2 lg:w-1/3">
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-xl">
                                {feature.text}
                            </h5>
                            <p className="text-md p-2 mb-20 text-neutral-500">
                                {feature.description}
                            </p>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    </div>
  )
}
export default FeatureSection;
