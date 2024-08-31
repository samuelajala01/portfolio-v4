'use client'

import { useState, useEffect } from 'react';
import Project from "@/components/Project";

const projectList = [
  {
    title: "Object Classifier using CNN",
    desc: "classification model built using the Cifar-10 dataset.",
    type: "solo",
    tools: ["Python", "Jupyter Notebook"],
    tags: ["Machine learning/Artificial Intelligence"],
  },
  {
    title: "Language Identification Model",
    desc: "In case you didn't catch that, I'm Samuel Ajala, currently in my third year studying Electronics and Computer Engineering at the Lagos State University. I have some experience in Frontend development, Additive Manufacturing, Internet of Things, and Embedded systems.",
    type: "solo",
    tools: ["Python", "Jupyter Notebook"],
    tags: ["Machine learning/Artificial Intelligence"],
  },
  {
    title: "GenMedix",
    desc: "GenMedix is an Automated Therapeutic Intervention Software designed to help users recover and restore their mental health using AI, performance tracking, and personalised recommendations.",
    type: "team",
    tools: ["Python", "React", "Tailwind"],
    tags: ["Frontend", "Backend", "FullStack"],
  },
  {
    title: "SMS Spam Classifier",
    desc: "Natural Language Processing (NLP) model utilizing binary classification to effectively categorize SMS messages as either spam or legitimate (ham).",
    type: "team",
    tools: ["Python", "Jupyter Notebook"],
    tags: ["Machine learning/Artificial Intelligence"],
  },
  {
    title: "Portfolio-v4",
    desc: "current portfolio page.",
    type: "solo",
    tools: ["Next js", "Tailwind"],
    tags: ["Frontend"],
  },
  {
    title: "Vidly Backend",
    desc: "Backend system for a video rental web app. It includes endpoints for CRUD operations.",
    type: "solo",
    tools: ["Node js"],
    tags: ["Backend"],
  },
  {
    title: "simple arduino car",
    desc: "code for arduino car utlizing bluetooth as the communication protocol",
    type: "solo",
    tools: ["C++", "Arduino IDE"],
    tags: ["Hardware"],
  },
  {
    title: "Metabnb clone",
    desc: "landing page clone of the metabnb site",
    type: "solo",
    tools: ["React", "CSS"],
    tags: ["Frontend"],
  },
  {
    title: "Easybank Landing Page",
    desc: "Easybank landing page- a website challenge from frontendmentor",
    type: "solo",
    tools: [ "HTML", "CSS"],
    tags: ["Frontend"],
  },
  
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectList);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const results = projectList.filter(project => 
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (selectedTag === '' || project.tags.includes(selectedTag))
    );
    setFilteredProjects(results);
  }, [searchTerm, selectedTag]);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const allTags = Array.from(new Set(projectList.flatMap(project => project.tags)));

  return (
    <>      
      <section className="mx-[5vw] mt-16 text-center mb-32">
        <h1 className="text-2xl md:text-[4vw] text-center mb-32 font-bold">
          See my projects
        </h1>
        <div className="m-auto">
          <input
            type="search"
            className="py-2 pl-[1rem] w-full bg-[#090f14] mb-4 text-lg border-2 border-[#090f14] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--pry)] focus:ring-opacity-50"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search Sam's Projects..."
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <button
            onClick={() => handleTagClick('')}
            className={`m-2 px-4 py-2 border-blue-600 border-2 rounded-full ${selectedTag === '' ? 'bg-blue-600 text-white' : 'text-white'}`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`m-2 px-4 py-2 border-blue-600 border-2 rounded-full ${selectedTag === tag ? 'bg-blue-600 text-white' : 'text-white'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <div className="mx-[5vw]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item) => (
            <Project key={item.title} title={item.title} desc={item.desc} type={item.type} tags={<div className='block sm:flex'>{item.tools.map((tool) => (<p key={tool} className='px-2'>{tool}</p>))}</div>}/>
          ))
        ) : (
          <p className="text-center text-xl">Not Found</p>
        )}
      </div>
    </>
  );
};

export default Projects;
