"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/projects");

        if (!response.ok) {
          throw new Error(`Gagal mengambil data: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data dari API:", data); // Debugging

        // Cek beberapa kemungkinan struktur response
        const projectsData = data.data || data.projects || data.message || data;

        if (!Array.isArray(projectsData)) {
          // Perbaikan typo disini
          console.error("Data bukan array:", projectsData);
          throw new Error("Data proyek harus berupa array");
        }

        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError(error instanceof Error ? error.message : "Terjadi kesalahan");
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <nav className="z-10">
        <div className="flex flex-row w-screen h-14 top-0 fixed items-center justify-between lg:justify-around font-serif font-medium text-xs lg:text-lg bg-[#213E22] text-white px-4">
          <p className="text-lg font-bold">Aditya Wiranata</p>

          {/* Hamburger Button */}
          <button
            className="lg:hidden flex items-center justify-center p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-primary"></span>
              <span className="block w-6 h-0.5 bg-primary"></span>
              <span className="block w-6 h-0.5 bg-primary"></span>
            </div>
          </button>

          <span className="hidden lg:flex">
            <a
              href="#section-about"
              className="hover:scale-125 my-5 mr-2 lg:mr-5"
            >
              About
            </a>
            <a href="#project" className="hover:scale-125 my-5 mr-2 lg:mr-5">
              Project
            </a>
            <a
              href="#section-contact"
              className="hover:scale-125 my-5 mr-2 lg:mr-5"
            >
              Contact
            </a>
          </span>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-[#213E22] text-primary flex flex-col items-center py-4">
            <a href="#section-about" className="hover:scale-110 my-2">
              About
            </a>
            <a href="#project" className="hover:scale-110 my-2">
              Project
            </a>
            <a href="#section-contact" className="hover:scale-110 my-2">
              Contact
            </a>
          </div>
        )}
      </nav>

      <div className="mt-32 mx-auto flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-evenly lg:w-10/12 font-serif">
        <div
          className="lg:w-1/2 mx-auto text-center lg:mx-0"
          data-aos="fade-right"
        >
          <h1 className="text-[#213E22] font-semibold text-3xl lg:text-5xl mt-12 lg:mt-32">
            Hello, Im Suastika
          </h1>
          <h2 className="text-[#213E22] font-semibold text-2xl mt-5">
            Web Designer
          </h2>
          <p className="text-[#213E22] font-medium text-base">
            I like creating responsive website designs, <br></br> fixing bugs
            and error codes Just For Fun.
          </p>

          <ul className="mx-auto *:bg-[#FFA310] *:text-zinc-50 *:rounded-full *:border *:border-[#FFCD4B] *:px-3 *:py-1 flex justify-center  *:mx-1 *:my-1 mt-3 flex-wrap w-11/12">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>ReactJs</li>
            <li>NextJs</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="w-6/12" data-aos="fade-left">
          <Image
            src="/res/profile.jpg"
            className="border-4  w-full lg:w-10/12 rounded-full border-[#577D26]"
            width="1000"
            height="1000"
            alt={""}
          />
        </div>
      </div>

      <div
        className="mt-40 lg:mt-64 text-[#213E22] font-serif lg:w-10/12 mx-auto mb-40"
        data-aos="fade-down"
      >
        <h1
          className="text-center font-bold text-2xl lg:text-4xl"
          id="section-about"
        >
          ABOUT ME
        </h1>
        <div>
          <p className="text-center text-base lg:text-lg mx-4 mt-4 lg:mx-56">
            My name is Made Suastika Aditya Wiranata, Im 17 years old. I am a
            student of SMK Wira Harapan (Tegal Jaya), a person who can fast
            learner, honest and discipline. I enjoy to learn new things and get
            a new experience. I can work as a team and personal I love coding
            and playing games.
          </p>
        </div>

        <div>
          <h1 className="text-center font-bold mt-10 text-2xl">WHAT I DO</h1>
          <div className="flex flex-row flex-wrap justify-evenly">
            <div
              className=" rounded mt-5 p-4 mx-2 lg:mx-0 lg:w-96 bg-white shadow-sm lg:shadow-2xl"
              data-aos="fade-right"
            >
              <h2 className="font-semibold text-lg">Study</h2>
              <p className="text-xs lg:text-base">
                I am a student at SMK Wira Harapan, and I have chosen the RPL
                program because of my passion for technology and software
                development. This field allows me to explore my creativity and
                problem-solving skills by learning to design and develop
                innovative software solutions.
              </p>
            </div>
            <div
              className=" rounded mt-5 p-4 mx-2 lg:mx-0 lg:w-96 bg-white shadow-sm lg:shadow-2xl"
              data-aos="fade-up"
            >
              <h2 className="font-semibold text-lg">Fitness</h2>
              <p className="text-xs lg:text-base">
                Staying fit is really important to me as a student because it
                helps me stay energized and focused on my studies. I make time
                for regular exercise, like jogging, doing workouts, or even
                yoga, to keep my body active and my mind clear.{" "}
              </p>
            </div>
            <div
              className=" rounded mt-5 p-4 mx-2 lg:mx-0 lg:w-96 bg-white shadow-sm lg:shadow-2xl"
              data-aos="fade-left"
            >
              <h2 className="font-semibold text-lg">Playing games</h2>
              <p className="text-xs lg:text-base">
                As a student, I enjoy playing games in my free time. It’s a
                great way for me to relax, have fun, and sometimes even
                challenge my problem-solving and strategic thinking skills.
                Gaming helps me stay balanced, giving me a break from studies
                while keeping my mind sharp and entertained.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="project" className="mt-20 lg:mt-40 font-serif text-[#213E22] font-serif w-9/12 mx-auto mb-20 lg:mb-64">
        <h1 className="text-center font-bold text-3xl lg:text-4xl underline">
          MY PROJECT
        </h1>

        {loading ? (
          <div className="text-center py-10">Memuat proyek...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">
            Gagal memuat proyek: {error}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-10">Belum ada proyek</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm  lg:shadow-2xl hover:shadow-xl transition-shadow"
              >
                <div className="p-4 h-48 w-full">
                  <Image
                    src={`http://127.0.0.1:8000/storage/${project.image}`}
                    alt={project.title}
                    width={700}
                    height={300}
                    className="object-cover"
                    unoptimized={process.env.NODE_ENV !== "production"}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mt-40 text-center text-[#213E22]">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 bottom-0 bg-[#213E22] text-white rounded hover:bg-[#577D26] transition-colors"
                    >
                      See Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
