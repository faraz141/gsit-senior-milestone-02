'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    let valid = true;
    const tempErrors = { name: '', email: '',subject: '', message: '' };

    if (!formData.name) {
      tempErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message) {
      tempErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '',subject: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || 'Failed to send message.'} ${errorData.details || ''}`);
      }
    } catch {
      setStatus('Error: Failed to send message.');
    }
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="mx-auto w-[220px]">
          <h1
            className="text-4xl font-bold text-center mb-6 leading-[0] font-[custom3] text-[#eee]"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            Contact <span className="text-yellow-500">Me</span>
          </h1>
          <div className="flex justify-center items-center w-[220px] mx-auto">
            <div
              className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[100px] border-l-[#CA8A04] border-b-[8px] border-b-transparent -mr-[10px]"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="800"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="w-[20px] h-[20px] rounded-full bg-[#CA8A04]"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[100px] border-r-[#CA8A04] border-b-[8px] border-b-transparent -ml-[10px]"
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

        <div className="flex flex-wrap justify-between gap-8 mb-12">
          <div
            className="text-white pt-32"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <p
              className="text-2xl text-gray-400 mb-8"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="800"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
              Feel free to Contact me.
            </p>
            <p className="mb-4">
              <span className="font-bold">Address :</span> Karachi, Pakistan
            </p>
            <p className="mb-4">
              <span className="font-bold">Phone :</span> +923 128 738 672
            </p>
            <p className="mb-4">
              <span className="font-bold">Email:</span> alamfaraz141@gmail.com
            </p>
            <div className="flex justify-center mt-12 space-x-6 mb-4 -ml-12">
              <Link
                href="https://github.com/faraz141"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/faraz-alam-89a923296/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125" />
              </Link>
              <Link
                href="https://www.facebook.com/faraz.alam.14203544"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125" />
              </Link>
              <Link
                href="https://www.instagram.com/farazalam857/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125" />
              </Link>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
            className="bg-gray-950 mt-12 p-6 rounded-lg w-full max-w-sm"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-3 bg-gray-900 transition duration-700 hover:scale-90 text-white rounded-md border ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-yellow-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-2">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-3 transition duration-700 hover:scale-90 bg-gray-900 text-white rounded-md border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-yellow-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full p-3 transition duration-700 hover:scale-90 bg-gray-900 text-white rounded-md border ${
                  errors.subject ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-yellow-500`}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-2">{errors.subject}</p>
              )}
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full p-3 transition duration-700 hover:scale-90 bg-gray-900 text-white rounded-md border ${
                  errors.message ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-yellow-500`}
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-2">{errors.message}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-500 transition duration-700 hover:scale-90 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md"
              >
                Contact Us
              </button>
            </div>
            {status && (
              <p className={`text-center mt-4 ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;