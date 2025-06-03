const HeroSection = () => {
  return (
    <section className="relative bg-[#f9f9ff] py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm text-pink-500 font-semibold mb-2">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex justify-center relative">
          {/* Product Image */}
          <img
            src="/chair.png"
            alt="Chair"
            className="z-10 w-80 lg:w-[400px]"
          />

          {/* Circular Background */}
          <div className="absolute bg-pink-100 w-96 h-96 rounded-full -z-10"></div>

          {/* Discount Badge */}
          <div className="absolute top-10 right-10 bg-blue-500 text-white rounded-full px-6 py-3 text-lg font-semibold">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
