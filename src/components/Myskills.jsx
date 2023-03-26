import React from "react";
import skills from "../data/skills";
import { useState } from "react";

const Myskills = () => {
  const [skillset, setSkillset] = useState("all");
  let newSkillSet;

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

  return (
    <section className="min-h-fit flex max-w-7xl mx-auto flex-col justify-center items-center py-16 px-5 text-center">
      <h3 className="pt-3 pb-6 text-3xl lg:text-4xl border-b-2 w-60">
        My Skills
      </h3>
      {/* <p className="max-w-xl font-light text-gray-500  text-sm pt-6 md:text-base justify-evenly">
        These are the skills that I currently possess. More are on the way!
      </p> */}
      <ul className="w-2/5 min-w-[300px] font-light text-gray-500 mb-5 text-sm pt-6 md:text-base flex justify-between align-center items-center tab-group">
        <li onClick={() => setSkillset("all")} className="cursor-pointer">
          All
        </li>
        <li onClick={() => setSkillset("frontend")} className="cursor-pointer">
          Frontend
        </li>
        <li onClick={() => setSkillset("backend")} className="cursor-pointer">
          Backend
        </li>
        <li onClick={() => setSkillset("other")} className="cursor-pointer">
          Others
        </li>
      </ul>
      <div className="flex flex-wrap justify-center items-center pt-3">
        {newSkillSet.map((skill) => {
          return (
            <div
              key={skill.id}
              className="w-48 h-48 rounded flex flex-col justify-between items-center  my-3 mx-2 rounded-3xl dark:bg-gray-900 shadow-lg dark:shadow-gray-100"
            >
              <div className="flex-1 flex flex-col justify-center">
                <img src={skill.image} alt="logo" className="w-28 " />
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
