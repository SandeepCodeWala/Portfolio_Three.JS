import React from "react";
import { projects } from "../assets/constants";
import { Link } from "react-router-dom";
import ArrowIcon from "../assets/icons/arrow.svg";
import CTA from "../components/CTA";


function Projects() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My
        <span className="font-semibold drop-shadow text-blue-500">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap3 text-slate-500">
        <p>
          I've worked on numerous projects throughout the years, but there are
          few I hold closest to my heart. Many of them are open source. Your
          corporation is highly appreciated.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopnerer noreffere"
                  className="font-semibold text-blue-500"
                >
                  Live Link
                  </Link>
                  <img 
                  src={ArrowIcon}
                  alt='arrow'
                  className="w-4 h-4 object-contain"
                  />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200"></hr>
      <CTA />
    </section>
  );
}

export default Projects;
