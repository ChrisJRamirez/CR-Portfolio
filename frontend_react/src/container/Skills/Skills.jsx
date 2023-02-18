import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const experiences = [
  {
    year: "2021-2022",
    works: [
      {
        name: "Full Stack Developer",
        company: "Family Promise",
        desc: "Contributed to both the frontend and backend codebase of the case management platform for the nonprofit Family Promise.",
      },
      {
        name: "Financial Analyst",
        company: "Westwood One",
        desc: "Analyzed company's financial data and provided insights and recommendations to support growth and profitability.",
      },
      {
        name: "Student",
        company: "Bloom Institute of Technology",
        desc: "Attended and graduated from BloomTech's Full Stack Web Development program.",
      },
    ],
  },
  {
    year: "2019-2020",
    works: [
      {
        name: "Digital Accountant",
        company: "Westwood One",
        desc: "Managed payment processes, reconciled accounts, and communicated payment information to partners to maintain strong relationships and ensure timely and accurate financial transactions.",
      },
    ],
  },
  {
    year: "2017-2018",
    works: [
      {
        name: "Trading Operations Analyst",
        company: "UBS",
        desc: "Responsible for ensuring smooth and efficient trade execution and settlement processes while identifying and mitigating any operational risks associated with trading activities.",
      },
    ],
  },
  {
    year: "2016-2017",
    works: [
      {
        name: "Executive Assistant",
        company: "Barefoot Media",
        desc: "Researched and discovered new media clients that could benefit from the firm’s consulting services, one of which would go on to become TikTok (fka Musical.ly).",
      },
    ],
  },
  {
    year: "2012-2016",
    works: [
      {
        name: "Student",
        company: "University of Delaware",
        desc: "Attended and graduated from the University of Delaware with a bachelor of science in accounting and finance.",
      },
    ],
  },
];

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    // client.fetch(query).then((data) => {
    //   setExperiences(data);
    // });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip "
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
