import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';

const Projects = () => {
  const projectsData = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with advanced features including real-time inventory, payment processing, and admin dashboard.",
      image: "https://public.readdy.ai/ai/img_res/e304d31951534951d471425b49dc67d9.jpg",
      tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
      links: {
        code: "#",
        demo: "#"
      }
    },
    {
      title: "Social Media Platform",
      description: "A full-stack social media platform with real-time messaging, post sharing, and user interactions using WebSocket.",
      image: "https://public.readdy.ai/ai/img_res/93b8f95a2309d0290ce8efe39e34857d.jpg",
      tags: ["Next.js", "MongoDB", "Socket.io", "AWS S3"],
      links: {
        code: "#",
        demo: "#"
      }
    },
    {
      title: "Tourism Balasore",
      description: "A tourism website showcasing the beautiful destinations and cultural heritage of Balasore.",
      image: "https://public.readdy.ai/ai/img_res/dc23ead8457bd62ebe71d6e2678c0c81.jpg",
      tags: ["HTML5", "CSS3", "JavaScript"],
      links: {
        code: "#",
        demo: "#"
      }
    },
    {
      title: "Car Rentals",
      description: "A car rental platform with booking system, vehicle catalog, and user dashboard.",
      image: "https://public.readdy.ai/ai/img_res/ed0231c635d6974a7232f526bbffa4c2.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      links: {
        code: "#",
        demo: "#"
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
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.links.code} className="flex items-center gap-2 text-primary hover:text-primary/80">
                    <RiGithubLine /> Code
                  </a>
                  <a href={project.links.demo} className="flex items-center gap-2 text-primary hover:text-primary/80">
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