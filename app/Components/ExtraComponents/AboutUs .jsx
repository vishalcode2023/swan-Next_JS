"use client";

const AboutUs = () => {
  return (
    <div>
      <div className=" py-14 px-4 md:px-10 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
          About Us
        </h2>

        {/* Description */}
        <p className="text-gray-700 max-w-5xl mx-auto text-base md:text-lg leading-relaxed mb-10">
          Innovating the Sorter Industry Since 2014. At{" "}
          <span className="font-semibold text-green-700">
            Swan Sorter Systems Pvt. Ltd.
          </span>
          , we are revolutionizing the color sorter industry with cutting-edge
          technology, precision engineering, and an unwavering commitment to
          quality.
        </p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-6">
          {/* Box 1 */}
          <div className="flex flex-col items-center px-4 border-l-0 md:border-l-2 border-gray-300">
            <h3 className="text-xl md:text-2xl font-bold text-green-700">
              1500+
            </h3>
            <p className="text-gray-700 text-sm mt-1">
              Sorter Machines Installed
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center px-4 border-l-0 md:border-l-2 border-gray-300">
            <h3 className="text-xl md:text-2xl font-bold text-green-700">
              16+ Years
            </h3>
            <p className="text-gray-700 text-sm mt-1">of Combined Experience</p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center px-4 border-l-0 md:border-l-2 border-gray-300">
            <h3 className="text-xl md:text-2xl font-bold text-green-700">
              45+ Highly
            </h3>
            <p className="text-gray-700 text-sm mt-1">
              Qualified Team of
              <br />
              Experienced Engineers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
