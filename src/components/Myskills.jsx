import React from "react";
import skills from "../data/skills";
import { useState } from "react";

const Myskills = () => {
  const [skillset, setSkillset] = useState("all");
  let newSkillSet;

  const set = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 1,
      title: "Frontend",
    },
    {
      id: 1,
      title: "Backend",
    },
    {
      id: 1,
      title: "Other",
    },
  ];

  switch (skillset) {
    case "all":
      newSkillSet = skills;
      break;
    case "frontend":
      newSkillSet = skills.filter((skill) => {
        return skill.type === "frontend";
      });
      break;
    case "backend":
      newSkillSet = skills.filter((skill) => {
        return skill.type === "backend";
      });
      break;
    case "other":
      newSkillSet = skills.filter((skill) => {
        return skill.type === "other";
      });
      break;
    default:
  }

  const handleClick = (e) => {
    setSkillset(e.target.textContent.toLowerCase());
    document.querySelector(".active-tab").classList.remove("active-tab");
    e.target.classList.add("active-tab");
  };

  return (
    <section className="min-h-fit flex max-w-7xl mx-auto flex-col justify-center items-center py-16 px-5 text-center">
      <h3 className="pt-3 pb-6 text-3xl lg:text-4xl border-b-2 w-60 ">
        My Skills
      </h3>
      {/* <p className="max-w-xl font-light text-gray-500  text-sm pt-6 md:text-base justify-evenly">
        These are the skills that I currently possess. More are on the way!
      </p> */}
      <ul className="w-2/5 min-w-[300px] font-light text-gray-500 mb-5 text-sm pt-6 md:text-base flex justify-between align-center items-center tab-group">
        {set.map((e, i) => (
          <li
            key={i}
            onClick={handleClick}
            className={`cursor-pointer tab-item ${
              i === 0 ? "active-tab" : ""
            } duration-300`}
          >
            {e.title}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap justify-center items-center pt-3 transform:none duration-500">
        {newSkillSet.map((skill) => {
          return (
            <div
              key={skill.id}
              className="w-32 h-32 md:w-48 md:h-48 rounded flex flex-col justify-between items-center  my-3 mx-2 rounded-3xl dark:bg-gray-900 shadow-lg dark:shadow-gray-100 transform translate-x-0 transition duration-500 "
            >
              <div className="flex-1 flex flex-col justify-center ">
                <img src={skill.image} alt="logo" className="w-16 md:w-28 " />
              </div>
              <div>
                <h3 className="pb-2">{skill.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Myskills;
