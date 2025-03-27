import { useState } from 'react';
import { RiCodeSLine, RiDatabase2Line, RiCloudLine, RiCheckLine, RiToolsFill, RiToolsLine } from 'react-icons/ri';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillsData = [
    {
      title: "Frontend Development",
      icon: <RiCodeSLine className="text-3xl text-primary" />,
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      bg: "bg-primary/10"
    },
    {
      title: "Frameworks & Libraries",
      icon: <RiDatabase2Line className="text-3xl text-secondary" />,
      items: [
        "React.js",
        "Tailwind CSS",
        "React Query",
        "DaisyUI"

      ],
      bg: "bg-secondary/10"
    },
    {
      title: "Tools & Technologies",
      icon: <RiToolsLine className="text-3xl text-primary" />,
      items: [
        "Git & GitHub",
        "VsCode",
        
      ],
      bg: "bg-primary/10"
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className={`bg-gray-800 p-8 rounded-lg card-hover transform-gpu hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100 before:rounded-lg ${hoveredCard === index ? 'thunder-active' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="thunder-container"></div>
              <div className={`w-16 h-16 flex items-center justify-center ${skill.bg} rounded-lg mb-6 skill-icon transform-gpu hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <ul className="space-y-3 text-gray-400">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <RiCheckLine className={skill.bg.includes('secondary') ? 'text-secondary' : 'text-primary'} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;