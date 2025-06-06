
const CVPortfolio = () => {
  // Handle CV download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/Faraz_cv.pdf"; // Path to your CV in the public folder
    link.download = "Faraz_Alam_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* <h2 className="text-2xl font-bold text-gray-800">Faraz Alam - Portfolio</h2> */}
      <button
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded transition duration-700 hover:scale-90"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
            onClick={handleDownload}
          >
            Download my CV
          </button>
    </div>
  );
};

export default CVPortfolio;