import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skils = () => {
  const skillsData = [
    {
      title: "React Developer",
      year: "2014 - 2018",
      description:
        "Developed dynamic and interactive user interfaces with React.js, focusing on creating reusable components and optimizing front-end performance. Collaborated with designers and back-end developers to deliver responsive and high-quality applications.",
    },
    {
      title: "Next.js Developer",
      year: "2018 - 2021",
      description:
        "Specialized in server-side rendering and static site generation with Next.js, enhancing SEO and load speeds for web applications. Built and deployed scalable applications using the latest features of the Next.js framework.",
    },
    {
      title: "MERN Stack Developer",
      year: "2016 - 2020",
      description:
        "Worked extensively with the MERN stack (MongoDB, Express, React, Node.js) to develop full-stack applications. Designed APIs, handled front-end state management, and implemented secure, efficient data storage solutions.",
    },
    {
      title: "Node.js Developer",
      year: "2021 - 2023",
      description:
        "Focused on backend development with Node.js, building scalable APIs and handling real-time data. Utilized frameworks like Express to create secure, high-performance applications, integrating with various databases and third-party services.",
    },
  ];

  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        {skillsData.map((skill, index) => (
          <SkilsItem
            key={index}
            title={skill.title}
            year={skill.year}
            description={skill.description}
          />
        ))}
        <SkilsLanguage
          skill1="Html"
          skill2="Css"
          skill3="JavaScript"
          level1="w-[91%]"
          level2="w-[88%]"
          level3="w-[80%]"
        />
        <div>
          <SkilsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="TypeScript"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skils;
