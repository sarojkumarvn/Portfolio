import React from 'react';
import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';

const Projects = () => {
  const projectsData = [
    {
      title: "Artifex Ai",
      description: "A platform for AI-powered chatbot with user authentication, Image generation, and Image analyzation tools. Designed for a seamless user experience with interactive UI elements.",
      image: "/artifex.jpg",
      tags: ["React.js", "Tailwind CSS", "Gemini API", "DaisyUI"],
      links: {
        code: "https://github.com/sarojkumarvn/ArtifexAiV2",
        demo: "https://github.com/sarojkumarvn/ArtifexAiV2",
      }
    },
    {
      title: "E-commerce Platform",
      description: "A feature-rich e-commerce platform including a login/signup system, payment processing. Designed for a seamless shopping experience with interactive UI elements.",
      image: "/ecom.jpg",
      tags: ["HTML5", "CSS3", "JavaScript"],
      links: {
        code: "https://github.com/sarojkumarvn/E-commerce",
        demo: "https://github.com/sarojkumarvn/E-commerce",
      }
    },
    {
      title: "Quick Brain Ai",
      description: "A fully functional AI-powered platform for quick chat with your PDF, PDF uploading System, AI-powered question answering, text summarization. Designed for a seamless user experience with interactive UI elements. Contributed to the Frontend Development of this project.",
      image: "/quickbrain.jpg",
      tags: ["React.js", "Tailwind CSS", "DaisyUI", "React Query"],
      links: {
        code: "https://github.com/jyotishankar04/quickBrainAI-frontend",
        demo: "https://github.com/jyotishankar04/quickBrainAI-frontend",
      }
    },
    {
      title: "Spotify Clone",
      description: "A Spotify clone with a fully responsive UI, sleek design, music playback, and interactive controls. Includes essential audio features for a seamless and engaging listening experience.",
      image: "/spotify.jpg",
      tags: ["HTML5", "CSS3", "JavaScript"],
      links: {
        code: "https://github.com/sarojkumarvn/Spotify",
        demo: "https://github.com/sarojkumarvn/Spotify",
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden card-hover transform-gpu hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-black font-bold rounded-full text-sm bg-indigo-200 hover:bg-indigo-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.links.code} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <RiGithubLine /> Code
                  </a>
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <RiExternalLinkLine /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
