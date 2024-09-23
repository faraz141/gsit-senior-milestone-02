import Image from 'next/image';
import Link from 'next/link';

// components/AboutUs.tsx
const AboutUs = () => {
  return (
    <section className="about bg-gray-900 text-center py-10 px-5 ">
      <h2 className="text-4xl font-bold text-white text-center mb-6">
        About <span className="text-yellow-500">Me</span>
      </h2>
      <div className="about-content flex flex-wrap items-center justify-center ml-20">
        <Image
          src={'/images/faraz-fiverr.png'}
          alt="About Us"
          width={400}
          height={300}
          className="rounded-custom-1 m-5 transition duration-700 hover:scale-90"
        />
        <div className="about-text max-w-xl m-5 text-left text-lg font-medium text-white">
          <p className="mb-4">
            Hello! I’m Faraz Alam frontend developer with expertise in React,
            Next.js, HTML, CSS, and Tailwind CSS. I specialize in crafting
            visually appealing and responsive web applications that offer a
            seamless user experience. By leveraging React and Next.js, I build
            dynamic, high-performance solutions, while HTML and CSS form the
            foundation of my design approach. Tailwind CSS enhances my workflow,
            enabling me to create custom, scalable designs efficiently.
            Passionate about clean code and modern design principles, I’m
            dedicated to delivering high-quality, user-centric websites that
            stand out. Let’s collaborate to bring your digital projects to life!
          </p>
          <p>
            We hope you enjoy our services as much as we enjoy offering them to
            you. If you have any questions or comments, please dont hesitate to
            contact us.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600  mt-6 text-gray-900 font-bold py-2 px-4 rounded transition duration-700 hover:scale-90">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
