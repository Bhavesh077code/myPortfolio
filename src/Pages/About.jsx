
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans overflow-x-hidden flex flex-col">

      <div className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">

        <Navbar />

        <div className="flex flex-col items-center text-center mt-6">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-blue-500/20">
            <img
              src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/485732185_1850665882429200_1874730380076376134_n.jpg?stp=c0.181.1080.1080a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=iP0D6wcGuA8Q7kNvwGtoAO3&_nc_oc=AdrWJJ8iPp0zyXYcpvNY6iI3U7YdtQ5pKeuZbbuhZNAo4Vi9tb7NY6FlDW9bM8Hl8rSPmrEGhk6HM1YC_N_Hu7oV&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=tijIwUi1t-fHmMdEFHfbxg&_nc_ss=7a3a8&oh=00_Af39Uuc2uLM0ssWvq3eIzT2HeWi3yFSzO4CTvJ1V2LUDcQ&oe=69E22271"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>


        <section className="mt-6 md:mt-12 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h1>

          <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
             Hey' my name is Bhavesh Kumar Yadav. I am a computer engineering student.
            I have skills in programming and problem solving. Node.js Backend Devloper focused on backend development.
            I am looking for an opportunity to grow my career in IT.
          </p>
        </section>


        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-[#111113] p-6 rounded-xl border border-gray-800">
            <h2 className="text-lg font-semibold mb-3 text-yellow-500">
              Who I Am
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              I am an aspiring Backend Developer with 7 months of practical experience in Node.js and MongoDB.
              I have worked on building REST APIs, authentication systems, and backend logic for real-world projects.
              I am continuously learning advanced concepts like clean architecture,<u> load balancing, security best practices, and deployment (DevOps)</u>.
              I am passionate about building efficient and scalable systems, and I aim to grow into a professional full-stack developer.
            </p>
          </div>

          <div className="bg-[#111113] p-6 rounded-xl border border-gray-800">
            <h2 className="text-lg font-semibold mb-3 text-yellow-500">
              My Goal
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              My goal is to become a top-tier backend engineer and build systems
              that can scale to millions of users while maintaining reliability
              and efficiency.
            </p>
          </div>

        </section>


        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-6 text-center">
            My <span className="text-blue-500">Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Node.js",
              "Express",
              "MongoDB",
              "NoSQL",
              "REST API",
              "JWT Auth",
              "React",
              "System Design",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1 text-xs sm:text-sm border border-gray-700 rounded-full text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>


        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Deployment & <span className="text-blue-500">Tools</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a
              href="https://vercel.com"
              target="_blank"
              className="bg-[#111113] border border-gray-800 rounded-xl p-4 text-center hover:scale-[1.03] transition"
            >
              <h3 className="text-lg font-semibold text-white">Vercel</h3>
              <p className="text-gray-400 text-sm mt-2">
                Frontend deployment platform
              </p>
            </a>


            <a
              href="https://render.com"
              target="_blank"
              className="bg-[#111113] border border-gray-800 rounded-xl p-4 text-center hover:scale-[1.03] transition"
            >
              <h3 className="text-lg font-semibold text-white">Render</h3>
              <p className="text-gray-400 text-sm mt-2">
                Backend & fullstack hosting
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              className="bg-[#111113] border border-gray-800 rounded-xl p-4 text-center hover:scale-[1.03] transition"
            >
              <h3 className="text-lg font-semibold text-white">GitHub</h3>
              <p className="text-gray-400 text-sm mt-2">
                Code hosting & version control
              </p>
            </a>

          </div>
        </section>


        {/* Experience */}
        <section className="mt-10 bg-[#111113] p-6 rounded-xl border border-gray-800">
          <h2 className="text-lg font-semibold mb-3 text-yellow-500">
            Experience
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Backend Developer (Self-Learning) with 9 months of hands-on experience in Node.js and MongoDB.
            Built a College Event Management System with features like event creation, user registration, and admin control.
            Developed an Expense Management System to track and manage daily expenses using CRUD operations and Email OTP Verification System.
            Experienced in building RESTful APIs, authentication systems, and database handling.
            Currently learning advanced concepts like clean architecture, backend security, and DevOps.

          </p>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <h2 className="text-lg sm:text-xl font-semibold">
            Let’s Work Together 🚀
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            I’m available for freelance and full-time opportunities.
          </p>

          <button className="mt-4 border border-yellow-500/50 text-yellow-500 px-5 py-2 rounded-md text-sm hover:bg-yellow-500/10 transition">
            <a href="/contact">Contact Me</a>
          </button>
        </section>

      </div>

      {/* FOOTER (NO WHITE SPACE FIXED) */}
      <Footer />

    </div>
  );
};

export default About;