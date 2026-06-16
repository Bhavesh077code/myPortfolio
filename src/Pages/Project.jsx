import React from "react";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import bhavesh from "../assets/bhavesh.jpg";
import resume from "../assets/resume.png";
import expanse from "../assets/expanse.png";
import event from "../assets/event.png";

const Project = () => {

  const projects = [
    {
      title: "Expanse Mangement System",
      desc: "Mahage daily expanse who spend money and how much money spend in which category.",
      image:  expanse,
      github: "https://github.com/Bhavesh077code/EXPENSE-MANAGEMENT-SYSTEM.git",
      live: "https://frontend-expanse-mangement-system.vercel.app/",
    },
    {
      title: "College Event Management System",
      desc: "A web application for  college events.",
      image: event,
      github: "https://github.com/Bhavesh077code/COLLAGE-BACKEND.git",
      live: "https://frontend-colage-event-management.vercel.app/",
    },
    {
      title: "AiHub",
      desc: ".......Building",
      image:  resume,
      github: " ",
      live: " ",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans p-4 md:p-8" >
      <Navbar />
      <div className=" flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/20 mb-4">
          <img
            src={bhavesh}
            alt="Profile"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Heading */}
      <section className="mt-5 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold">
          My <span className="text-blue-500">Projects</span>
        </h1>
        <p className="mt-3 text-gray-400 text-sm">
          Here are some of my featured works
        </p>
      </section>

      {/* Projects Grid */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111113] border border-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-gray-400 text-sm mt-2">
                {project.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={project.github}
                  className="flex-1 text-center border border-gray-700 py-1.5 rounded-md text-xs hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="flex-1 text-center border border-yellow-500/50 text-yellow-500 py-1.5 rounded-md text-xs hover:bg-yellow-500/10 transition"
                >
                Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />

    </div>
  );
};

export default Project;