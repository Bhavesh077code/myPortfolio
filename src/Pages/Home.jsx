import React from "react";
import { Server, Globe, Database, Cloud, Code2, MergeIcon } from "lucide-react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import bhavesh from "../assets/bhavesh.jpg";
import Typewriter from "../component/TypeWriter";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans p-4 md:p-8">
      <Navbar />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          BUILDING{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            SCALABLE
          </span>{" "}
          BACKEND SYSTEMS
        </h1>
        <p className="text-gray-400 text-lg">
          Node.js, API Design, and Microservices.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111113] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/20 mb-4">
            <img src={bhavesh} alt="Profile" className="w-full h-full" />
          </div>

          <h3 className="font-bold text-lg mb-2">ABOUT ME</h3>
          <p className="text-gray-400 text-sm mb-6">
            Dedicated developer focusing on robust and efficient server-side
            logic.
          </p>
          <div className="flex-1 mx-2 text-center overflow-hidden">
            <div className="text-3xl text-gray-400 font-bold mb-4 ">
              <Typewriter
                words={[
                  "Welcome To My Portfolio",
                  "BACKEND DEVLOPER",
                  "BHAVESH YADAV",
                  "FRONTEND DEVLOPER: BHAVESH YADAV",
                  "Continus Learning",
                ]}
              />
            </div>
          </div>

          <div className="flex gap-4"></div>
        </div>

        <div className="bg-[#111113] border border-gray-800 rounded-xl p-6">
          <h3 className="text-center text-sm font-bold text-gray-500 mb-8 uppercase tracking-widest">
            API Architecture
          </h3>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <Globe className="text-blue-400 mb-1" />
                <span className="text-[10px]">CLIENT</span>
              </div>

              <div className="w-10 h-0.5 bg-gray-700"></div>

              <div className="flex flex-col items-center">
                <Server className="text-green-400 mb-1" />
                <span className="text-[10px]">NODE</span>
              </div>

              <div className="w-10 h-0.5 bg-gray-700"></div>

              <div className="flex flex-col items-center">
                <Database className="text-orange-400 mb-1" />
                <span className="text-[10px]">DB</span>
              </div>
            </div>

            <div className="mt-8 w-full bg-black/40 p-3 rounded font-mono text-[10px] text-green-500 border border-gray-800">
              <Typewriter 
                words={[
                  "const app = express();",
                  "app.use('/api', routes);",
                  "connectDatabase();",
                ]}
              />
            </div>

            <div className="flex flex-col items-center">
              <div className="mt-10 w-full bg-black/50 border border-gray-800 rounded-2xl p-5 font-mono text-sm overflow-x-auto">
                <p className="text-pink-400">const app = express();</p>

                <p className="text-green-400 mt-2">app.use("/api", routes);</p>

                <p className="text-cyan-400 mt-2">connectDatabase();</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <Cloud className="text-cyan-400 mb-1" />
              <span className="text-[10px]">AWS CLOUD</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#111113] border border-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-sm mb-4 border-b border-gray-800 pb-2">
              KEY PROJECTS
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-blue-400 text-sm font-semibold">
                  Expanse Management System
                </h4>
                <p className="text-[11px] text-gray-500">
                  Scalable system for high traffic apps.
                </p>
              </div>

              <div>
                <h4 className="text-blue-400 text-sm font-semibold">
                  collage Event Mangement system
                </h4>
                <p className="text-[11px] text-gray-500">
                  Socket.io based notification system.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#111113] border border-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-sm mb-4 border-b border-gray-800 pb-2">
              CORE SKILLS
            </h3>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex justify-center">
                <Code2 className="text-green-500" />
              </div>
              <div className="flex justify-center">
                <Database className="text-blue-500" />
              </div>
              <div className="flex justify-center">
                <Cloud className="text-cyan-500" />
              </div>
              <div className="flex justify-center">
                <Server className="text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

/*
import React from "react";
import {
  Server,
  Globe,
  Database,
  Cloud,
  ArrowRight,
} from "lucide-react";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import bhavesh from "../assets/bhavesh.jpg";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-black text-white overflow-hidden relative">
      
      <Navbar />

     
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 py-8 md:py-10 max-w-7xl mx-auto">


        <section className="text-center mb-14 md:mb-20 pt-4 md:pt-10">

          <p className="uppercase tracking-[0.25em] text-yellow-400 text-xs sm:text-sm mb-4">
            Backend Developer
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
            BUILDING
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
              SCALABLE SYSTEMS
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            I build fast, scalable and production-ready backend systems using
            Node.js, Express, Microservices and Cloud Technologies.
          </p>

         
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <button className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 px-6 py-3 rounded-xl text-black font-semibold flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105">
              View Projects <ArrowRight size={18} />
            </button>

            <button className="border border-gray-700 hover:border-gray-500 hover:bg-white/5 px-6 py-3 rounded-xl transition-all duration-300">
              Contact Me
            </button>

          </div>
        </section>

 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">

         
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/30">

            <div className="flex flex-col items-center text-center">

              <div className="relative mb-6">

                <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-20 rounded-full"></div>

                <img
                  src={bhavesh}
                  alt="Bhavesh"
                  className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-yellow-500/20"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2">
                Bhavesh
              </h2>

              <p className="text-yellow-400 text-sm mb-4">
                Node.js Backend Engineer
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                Passionate backend developer focused on scalable APIs,
                microservices architecture, authentication systems and
                cloud deployment.
              </p>

             
              <div className="flex gap-4 mt-6">

                <a
                  href="#"
                  className="p-3 rounded-xl bg-white/5 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="#"
                  className="p-3 rounded-xl bg-white/5 hover:bg-blue-500 transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>

              </div>
            </div>
          </div>

       
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30">

            <h3 className="text-center text-sm uppercase tracking-[0.3em] text-gray-400 mb-10">
              System Architecture
            </h3>

            <div className="flex flex-col items-center">

            
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

                
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                    <Globe className="text-blue-400" />
                  </div>

                  <span className="mt-2 text-xs text-gray-400">
                    Client
                  </span>
                </div>

                <div className="hidden sm:block w-14 h-[2px] bg-gradient-to-r from-blue-500 to-green-500"></div>

             
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
                    <Server className="text-green-400" />
                  </div>

                  <span className="mt-2 text-xs text-gray-400">
                    API Server
                  </span>
                </div>

        
                <div className="hidden sm:block w-14 h-[2px] bg-gradient-to-r from-green-500 to-orange-500"></div>

  
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                    <Database className="text-orange-400" />
                  </div>

                  <span className="mt-2 text-xs text-gray-400">
                    Database
                  </span>
                </div>
              </div>

              <div className="mt-10 w-full bg-black/50 border border-gray-800 rounded-2xl p-5 font-mono text-sm overflow-x-auto">

                <p className="text-pink-400">
                  const app = express();
                </p>

                <p className="text-green-400 mt-2">
                  app.use("/api", routes);
                </p>

                <p className="text-cyan-400 mt-2">
                  connectDatabase();
                </p>

              </div>

           
              <div className="mt-8 flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-5 py-3 rounded-2xl">

                <Cloud className="text-cyan-400" />

                <span className="text-sm text-gray-300">
                  AWS Cloud Deployment
                </span>

              </div>
            </div>
          </div>

          
          <div className="flex flex-col gap-5 md:gap-6">

           
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30">

              <h3 className="text-lg font-bold mb-6">
                Featured Projects
              </h3>

              <div className="space-y-6">

             
                <div className="group cursor-pointer">

                  <h4 className="text-yellow-400 font-semibold group-hover:translate-x-1 transition-all">
                    Expense Management System
                  </h4>

                  <p className="text-sm text-gray-400 mt-1">
                    High performance financial tracking system with JWT auth and analytics dashboard.
                  </p>

                </div>

              
                <div className="group cursor-pointer">

                  <h4 className="text-blue-400 font-semibold group-hover:translate-x-1 transition-all">
                    College Event Management
                  </h4>

                  <p className="text-sm text-gray-400 mt-1">
                    Real-time event platform using Socket.io and cloud database integration.
                  </p>

                </div>

              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/30">

              <h3 className="text-lg font-bold mb-6">
                Core Skills
              </h3>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">

                {[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "Docker",
                  "AWS",
                  "REST API",
                  "Socket.io",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

*/
