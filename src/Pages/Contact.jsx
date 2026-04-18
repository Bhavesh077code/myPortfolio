import React from "react";
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans p-4 md:p-8" >
      <Navbar />
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/20 mb-4">
          <img
            src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/671579969_2167454134083705_2380383236102308248_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xq1pzm-lgdwQ7kNvwF3PdcT&_nc_oc=AdqhXZiPlbwZJbg1Xj65CSLjf8Ab-HIiQa3M569iPTV7wBCtYZmR-LalDMuqmIyzMNFBYELnJwjuV3pOe53mh-Is&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=ePZygwJsf0DlYyfKyfHJ9g&_nc_ss=7a3a8&oh=00_Af2qk1cAHxcgh8pRnvtFAmaYdkgz6AvTpXiCf4I2OtpE7A&oe=69E959DD"
            alt="Profile"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="mt-2 flex justify-center gap-5">

        <a
          href="https://github.com/Bhavesh077code"
          target="_blank"
          className="p-3 rounded-full border border-gray-700 hover:bg-white hover:text-black transition text-xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/Bhavesh077code"
          target="_blank"
          className="p-3 rounded-full border border-gray-700 hover:bg-blue-600 hover:text-white transition text-xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.facebook.com/Bhavesh.ky.35"
          target="_blank"
          className="p-3 rounded-full border border-gray-700 hover:bg-blue-600 hover:text-white transition text-xl"
        >
          <FaFacebook />
        </a>

        <a
          href="https://x.com/ydv_bhavesh"
          target="_blank"
          className="p-3 rounded-full border border-gray-700 hover:bg-sky-500 hover:text-white transition text-xl"
        >
          <FaTwitter />
        </a>

      </div>

      {/* Heading */}
      <section className="mt-5 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Contact <span className="text-blue-500">Me</span>
        </h1>
        <p className="mt-3 text-gray-400 text-sm sm:text-base">
          Feel free to reach out for projects, collaborations, or just a chat.
        </p>
      </section>

      {/* Main Content */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <div className="bg-[#111113] p-6 rounded-xl border border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-yellow-500">
            Get In Touch
          </h2>

          <div className="space-y-3 text-sm text-gray-400">
            <p>📧 Email: bhavesh12yadav2@gmail.com</p>
            <p>📱 Phone: +9702614470</p>
            <p>📍 Location: Nepal</p>
          </div>

          <p className="mt-6 text-gray-500 text-xs">
            I usually respond within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#111113] p-6 rounded-xl border border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-yellow-500">
            Send Message
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#0a0a0b] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#0a0a0b] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="bg-[#0a0a0b] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="mt-2 border border-yellow-500/50 text-yellow-500 py-2 rounded-md text-sm hover:bg-yellow-500/10 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </section>

      <Footer />
    </div>
  )
}

export default Contact