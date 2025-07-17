import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { cn } from '../lib/utils';
import React, { useState } from 'react'; 


const projects = [
  {
    id: 1,
    title: "Meta-Layer",
    description: "Interactive landing page with seamless animations and transitions, inspired by Zentry.",
    image: "/projects/project1.png",
    tags: ["React", "JavaScript", "CSS","Tailwind","Gsap"],
    demoUrl: "https://meta-layer.vercel.app/",
    githubUrl: "https://github.com/shantanu020/MetaLayer",
    category:"animation"
  },
  {
    id: 2,
    title: "Velvet Pour",
    description: "A visually engaging, scroll-driven experience crafted using GSAP and React.",
    image: "/projects/project2.png",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Gsap"],
    demoUrl: "https://gsap-cocktails-one.vercel.app/",
    githubUrl: "https://github.com/shantanu020/gsap_cocktails",
    category:"animation"
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of Project Three. It emphasizes the innovative aspects and user experience.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    category:"animation"
  },
  {
    id: 4,
    title: "Project Three",
    description: "This is a brief description of Project Three. It emphasizes the innovative aspects and user experience.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    category:"java"
  },
  {
    id: 5,
    title: "Project Three",
    description: "This is a brief description of Project Three. It emphasizes the innovative aspects and user experience.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    category:"java"
  },
  {
    id: 6,
    title: "Project Three",
    description: "This is a brief description of Project Three. It emphasizes the innovative aspects and user experience.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    category:"java"
  },
  {
    id: 7,
    title: "Project Three",
    description: "This is a brief description of Project Three. It emphasizes the innovative aspects and user experience.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    category:"fullstack"
  },
  {
    id: 8,
    title: "Project Three",
    description: "This is a brief description of Project Three. It emphasizes the innovative aspects and user experience.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    category:"fullstack"
  },
  {
    id: 9,
    title: "Project Three",
    description: "This is a brief description of Project Three. It emphasizes the innovative aspects and user experience.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    category:"fullstack"
  },

];
const categories = ["all", "fullstack", "animation", "java","ml"];

const ProjectsSection = () => {
  const [activeCategory, setactiveCategory] = useState("all");
  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category,key)=>(
            <button
              key={key}
              className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',activeCategory===category?'bg-primary  text-primary-foreground':'bg-secondary/70 text-foreground hover:bg-secondary')}
              onClick={()=>setactiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg card-hover shadow-xs overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl} 
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                      <ExternalLink size={20}/>
                    </a>
                    <a 
                      href={project.githubUrl}
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <Github size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a href="https://github.com/shantanu020" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
            Check My Github <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
