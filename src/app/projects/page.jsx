"use client";

import { useState, useEffect } from "react";
import Project from "@/components/Project";
import ContactBox from "@/components/Contactbox";
import gemcraft from "/public/gemcraft.png"

const projectList = [
  {
    title: "GemCraft",
    visit: "https://gemcraft.vercel.app",
    desc: "GemCraft is an AI-powered resume assistant designed to help users create compelling, job-ready resumes through smart optimization. It analyzes job descriptions and resumes to ensure perfect alignment, providing users with tailored suggestions and intelligent feedback that boost their chances of landing interviews.",
    type: "solo",
    tools: ["React js", "Tailwind"],
    tags: ["Frontend", "Backend"],
    image: gemcraft,
    imageAlt: "Image of GEmcraft"

  },
  {
    title: "Space Clubs LASU",
    visit: "https://www.spaceclubslasu.org",
    desc: "Official website for Space Clubs LASU",
    type: "solo",
    tools: ["Next js", "Tailwind"],
    tags: ["Frontend"],
    image: gemcraft,
    imageAlt: "Image of GEmcraft"
  },
  {
    title: "GenMedix",
    visit: "https://genmedix.vercel.app",
    desc: "GenMedix is an Automated Therapeutic Intervention Software designed to help users recover and restore their mental health using AI, performance tracking, and personalised recommendations.",
    type: "team",
    tools: ["Python", "React", "Tailwind"],
    tags: ["Backend", "FullStack", "Machine learning/Artificial Intelligence"],
    image: gemcraft,
    imageAlt: "Image of GEmcraft"
  },
  {
    title: "SM NLP Scapper",
    visit: "https://github.com/samuelajala01/sm_nlp_scrapper",
    desc: "A web scraping tool that gathers user-generated comments from various online sources related to specified topics. The tool then performs sentiment analysis on the collected data to assess public opinion.",
    type: "solo",
    tools: ["Python"],
    tags: ["Machine learning/Artificial Intelligence"],
    image: gemcraft,
    imageAlt: "Image of GEmcraft"
  },
  {
    title: "LASU Faculty Journal",
    visit: "https://facaulty-journal.onrender.com",
    desc: "A Fullstack Faculty Journal website for the Lagos State University which allows Lecturers and Students publish journals.",
    type: "team",
    tools: ["React", "Tailwind"],
    tags: ["FullStack"],
    image: gemcraft,
    imageAlt: "Image of GEmcraft"
  },
  {
    title: "Vidly Backend",
    visit: "https://github.com/samuelajala01/vidly_backend",
    desc: "Backend system for a video rental web app. It includes endpoints for CRUD operations.",
    type: "solo",
    tools: ["Node js"],
    tags: ["Backend"],
    image: gemcraft,
    imageAlt: "Image of GEmcraft"
  },
  {
    title: "NIHDS Landing Page",
    visit: "https://nihds.vercel.app",
    desc: "Website for the Nigerian Innovative Hardware Development Society.",
    type: "team",
    tools: ["React", "Tailwind"],
    tags: ["Website"],
  },
  {
    title: "Object Classifier using CNN",
    visit: "https://github.com/samuelajala01/CNN_classifier",
    desc: "classification model built using the Cifar-10 dataset.",
    type: "solo",
    tools: ["Python", "Jupyter Notebook"],
    tags: ["Machine learning/Artificial Intelligence"],
  },
  {
    title: "Language Identification Model",
    visit: "https://lang-identification-model.streamlit.app/",
    desc: "An NLP classification model that can detect up to 20 different languages.",
    type: "solo",
    tools: ["Python", "Jupyter Notebook", "Streamlit"],
    tags: ["Machine learning/Artificial Intelligence"],
  },

  {
    title: "SMS Spam Classifier",
    visit: "https://github.com/samuelajala01/sms_spam_classifier",
    desc: "Natural Language Processing (NLP) model utilizing binary classification to effectively categorize SMS messages as either spam or legitimate(ham).",
    type: "solo",
    tools: ["Python", "Jupyter Notebook"],
    tags: ["Machine learning/Artificial Intelligence"],
  },
  {
    title: "Portfolio-v4",
    visit: "https://github.com/samuelajala01/portfolio-v4",
    desc: "current portfolio page.",
    type: "solo",
    tools: ["Next js", "Tailwind"],
    tags: ["Website"],
  },

  {
    title: "RC arduino car",
    visit: "https://github.com/samuelajala01/embedded-systems-projects",
    desc: "code for arduino car utlizing bluetooth as the communication protocol",
    type: "solo",
    tools: ["C++", "Arduino IDE"],
    tags: ["Hardware"],
  },
  {
    title: "Metabnb website clone",
    visit: "https://metabnb-copy.netlify.app/",
    desc: "landing page clone of the metabnb site",
    type: "solo",
    tools: ["React", "CSS"],
    tags: ["Website"],
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectList);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const results = projectList.filter(
      (project) =>
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )) &&
        (selectedTag === "" || project.tags.includes(selectedTag))
    );
    setFilteredProjects(results);
  }, [searchTerm, selectedTag]);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const allTags = Array.from(
    new Set(projectList.flatMap((project) => project.tags))
  );

  return (
    <>
      <section className="mx-[5vw] mt-16 text-center mb-32">
        <h1 className="text-2xl md:text-[4vw] text-center mb-16 font-bold">
          See <span className="text-blue-600">my</span> projects
        </h1>
        <blockquote className="mb-16 text-[1.4rem]">
          “We are what we repeatedly do. Excellence, then, is not an act, but a
          habit.” — Aristotle
        </blockquote>
        <div className="m-auto">
          <input
            type="search"
            className="py-2 pl-[1rem] w-full bg-[#090f14] mb-4 text-lg border-2 border-[#090f14] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--pry)] focus:ring-opacity-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Sam's featured Projects..."
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <button
            onClick={() => handleTagClick("")}
            className={`m-2 px-4 py-2 border-blue-600 border-2 rounded-md ${
              selectedTag === "" ? "bg-blue-600 text-white" : "text-white"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`m-2 px-4 py-2 border-blue-600 border-2 rounded-md ${
                selectedTag === tag ? "bg-blue-600 text-white" : "text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <div className="mx-[5vw]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item) => (
            <Project
              key={item.title}
              visit={item.visit}
              title={item.title}
              desc={item.desc}
              type={item.type}
              tools={item.tools} // Just pass tools as array
              image={item.image}
              imageAlt={item.imageAlt}
            />
          ))
        ) : (
          <p className="text-center text-xl">Oops💀, Not Found</p>
        )}
      </div>

      <ContactBox />
    </>
  );
};

export default Projects;
