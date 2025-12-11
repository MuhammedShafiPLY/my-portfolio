import React from "react";

const PulseAnimation = ({ place }) => {
  return (
    <div>
      <div className="absolute inset-0">
        <div
          className={`absolute ${place}
          w.[70vw] sm:w-[z-500vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md-h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full
          bg-linear-to-r from-[#009f40] via-[#02ce54] to-[#026028]
          blur-[110px] sm:blur-[130px] md:blur-[150px]
          opacity-10 sm:opacity-20 md:opacity-10
          animate-pulse`}
        ></div>
        <div></div>
      </div>
    </div>
  );
};

export default PulseAnimation;
