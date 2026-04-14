import React from "react";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Project = () => {

  const projects = [
    {
      title: "Expanse Mangement System",
      desc: "Mahage daily expanse who spend money and how much money spend in which category.",
      image: "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/670376551_122346646166004331_5618466667308499673_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=PAztLL5Mz98Q7kNvwGPK12B&_nc_oc=AdrxLQxpWf1_4OQCaiKFzrZFtguG5MoIDNHHFbdXKSVn0CfTiSEs-Q7W0ahnTynbzmshocXva9G-XK9oREs2TD0W&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=o0BYLoM05cuQVGqX4LBntQ&_nc_ss=7a3a8&oh=00_Af3oQ8rEGQ5QqIduhHjtMScvcWbKJyY0nLGuXXsNfZByJw&oe=69E43CF8",
      github: "https://github.com/Bhavesh077code/EXPENSE-MANAGEMENT-SYSTEM.git",
      live: "https://frontend-expanse-mangement-system.vercel.app/",
    },
    {
      title: "College Event Management System",
      desc: "A web application for managing college events.",
      image: "data:image/jpeg;base64,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",
      github: "https://github.com/Bhavesh077code/COLLAGE-BACKEND.git",
      live: "https://frontend-colage-event-management.vercel.app/",
    },
    {
      title: "Upcoming",
      desc: ".......",
      image: "https://www.google.com/imgres?q=upcoming%20%20image&imgurl=https%3A%2F%2Fst2.depositphotos.com%2F1008768%2F5535%2Fi%2F450%2Fdepositphotos_55355759-stock-photo-coming-soon.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Fupcoming-even.html&docid=NqpdSz95BXNQ6M&tbnid=1lYRKNLMcPxkTM&vet=12ahUKEwim9p-dx-qTAxX-xTgGHXp2BIwQnPAOegQIHRAB..i&w=600&h=507&hcb=2&ved=2ahUKEwim9p-dx-qTAxX-xTgGHXp2BIwQnPAOegQIHRAB",
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
            src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/485732185_1850665882429200_1874730380076376134_n.jpg?stp=c0.181.1080.1080a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=iP0D6wcGuA8Q7kNvwGtoAO3&_nc_oc=AdrWJJ8iPp0zyXYcpvNY6iI3U7YdtQ5pKeuZbbuhZNAo4Vi9tb7NY6FlDW9bM8Hl8rSPmrEGhk6HM1YC_N_Hu7oV&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=tijIwUi1t-fHmMdEFHfbxg&_nc_ss=7a3a8&oh=00_Af39Uuc2uLM0ssWvq3eIzT2HeWi3yFSzO4CTvJ1V2LUDcQ&oe=69E22271"
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