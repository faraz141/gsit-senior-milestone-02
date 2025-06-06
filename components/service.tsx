"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="services flex flex-col items-center justify-center bg-gray-900 text-white py-10 px-5">
      {/* Heading */}
      <div className="mx-auto w-[220px]">
        <h1
          className="text-[40px] font-bold text-center my-[20px] leading-[0] font-[custom3] text-[#CC8B00]"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          Services
        </h1>
        <div className="flex justify-center items-center w-[220px] mx-auto">
          <div
            className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[100px] border-l-[#374151] border-b-[8px] border-b-transparent -mr-[10px]"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          ></div>
          <div
            className="w-[20px] h-[20px] rounded-full bg-[#374151]"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          ></div>
          <div
            className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[100px] border-r-[#374151] border-b-[8px] border-b-transparent -ml-[10px]"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          ></div>
        </div>
      </div>

      {/* Services Cards */}
      <div className="grid gap-6 md:grid-cols-3 mt-10 px-4 max-w-6xl">
        {/* Card 1 */}
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition duration-500"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            💻 Personal / Portfolio Websites
          </h3>
          <p className="text-sm text-gray-300">
            Clean, professional personal portfolios tailored to highlight your
            skills and achievements.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition duration-500"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            🚀 Business Landing Pages
          </h3>
          <p className="text-sm text-gray-300">
            High-converting landing pages built for product launches, services,
            and business growth.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition duration-500"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            📰 Blog / CMS Websites
          </h3>
          <p className="text-sm text-gray-300">
            SEO-optimized, dynamic blogs or CMS solutions using Next.js for
            speed and scalability.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition duration-500"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
          data-aos-delay="300"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            📊 React Dashboards / Admin Panels
          </h3>
          <p className="text-sm text-gray-300">
            Interactive, data-driven dashboards and admin panels with React for
            efficient business management.
          </p>
        </div>

        {/* Card 5 */}
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition duration-500"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
          data-aos-delay="400"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            🛒 E-commerce Websites
          </h3>
          <p className="text-sm text-gray-300">
            Fully-featured online stores with smooth UX, secure payment
            integration, and scalable Next.js architecture.
          </p>
        </div>

        {/* Card 6 */}
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition duration-500"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
          data-aos-delay="500"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            ⚙️ Website Maintenance & Optimization
          </h3>
          <p className="text-sm text-gray-300">
            Regular updates, performance tuning, and SEO optimization to keep
            your site fast, secure, and visible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
