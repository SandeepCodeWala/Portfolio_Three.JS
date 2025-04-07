import React from "react";
import { experiences, skills } from "../assets/constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm{" "}
        <span className="font-semibold drop-shadow text-blue-500">Sandeep</span>
      </h1>
      <div className="mt-5 flex flex-col gap3 text-slate-500">
        <p>
          Software Engineer based in India, Specializing in technical education
          through hands-on learning and building applications
        </p>
      </div>
      <div className="py-10 flex flex-col">
  <h3 className="subhead-text">My Skills</h3>
  <div className="mt-16 flex flex-wrap gap-12">
    {skills.map((skill) => (
      <div key={skill.name} className="block-container w-20 h-28"> {/* increased height */}
        <div className="btn-back rounded-xl" />
        <div className="btn-front rounded-xl flex flex-col justify-center items-center">
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className="w-1/2 h-1/2 object-contain"
          />
          <p className="text-center text-sm mt-2">{skill.name}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      <div className="py-16">
        <h3 className="subhead-text">My Experience</h3>

        <div className="mt-5 flex flex-col gap3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                    
                  </div>
                }
                iconStyle={{
                background:experience.iconBg
                
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow:'none'
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point,index) => (
                    <li
                      key={`experince-point-${index}`}
                      className="text-blue-500/50 font-normal pl-10 "
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200"></hr>
      <CTA />
    </section>
  );
}

export default About;
