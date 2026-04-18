import React from "react";
import {
  Server,
  Globe,
  Database,
  Cloud,
  Code2
} from "lucide-react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans p-4 md:p-8">
      <Navbar />

      {/* Hero Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          BUILDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">SCALABLE</span> BACKEND SYSTEMS
        </h1>
        <p className="text-gray-400 text-lg">
          Node.js, API Design, and Microservices.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="bg-[#111113] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/20 mb-4">
            <img
              src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/485732185_1850665882429200_1874730380076376134_n.jpg?stp=c0.181.1080.1080a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=e_QXUfcYSAAQ7kNvwGzGT1W&_nc_oc=Adqqw7_00zhvwlbuG50vrJ43gdMHJgWuONZyp15yBAyVuGR5HGWRFz-cPtwRkrOkulUlk3g5AbK5xE-nUS3WeXiS&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=_Lq6Stfcb3mMhFwSIf5uUA&_nc_ss=7a3a8&oh=00_Af26TMFpq7gxeEE7v_ahl9SdB_FLuYsUtmldRiGahZcTXA&oe=69E962B1"
              alt="Profile"
              className="w-full h-full"
            />
          </div>

          <h3 className="font-bold text-lg mb-2">ABOUT ME</h3>
          <p className="text-gray-400 text-sm mb-6">
            Dedicated developer focusing on robust and efficient server-side logic.
          </p>

          <div className="flex gap-4">

          </div>
        </div>

        {/* CENTER CARD */}
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
              <p>const app = express();</p>
              <p>app.use('/api', routes);</p>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <Cloud className="text-cyan-400 mb-1" />
              <span className="text-[10px]">AWS CLOUD</span>
            </div>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex flex-col gap-6">

          {/* Projects */}
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

          {/* Skills */}
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