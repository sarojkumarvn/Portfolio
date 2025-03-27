import { useEffect, useState } from 'react';
import { FiMenu, FiArrowRight, FiSend } from 'react-icons/fi';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create stars animation
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        left: `${Math.random() * 100}%`,
        color: `rgba(255,255,255,0.9), rgba(99,102,241,0.8), rgba(147,51,234,0.7)`
      };
      setStars(prev => [...prev, newStar]);
      
      setTimeout(() => {
        setStars(prev => prev.filter(star => star.id !== newStar.id));
      }, 3000);
    }, 1000);

    // Navbar scroll effect
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const nav = document.querySelector('nav');
      
      if (nav) {
        if (currentScroll > lastScrollTop) {
          nav.style.transform = 'translateY(-100%)';
        } else {
          nav.style.transform = 'translateY(0)';
        }
      }
      
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Stars */}
      {stars.map(star => (
        <div 
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: '0',
            filter: `drop-shadow(0 0 10px ${star.color.split(',')[0]}) 
                    drop-shadow(0 0 20px ${star.color.split(',')[1]}) 
                    drop-shadow(0 0 30px ${star.color.split(',')[2]})`,
            animation: `falling-star ${3 + Math.random() * 3}s cubic-bezier(0.4, 0, 0.2, 1) forwards`
          }}
        />
      ))}

      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-pacifico text-gradient">SKO</a>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            </div>
            <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-full h-full bg-gray-900/95 backdrop-blur-sm z-40 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button onClick={() => scrollToSection('about')} className="text-xl hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-xl hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-xl hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="text-xl hover:text-primary transition-colors">Contact</button>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-button">Resume</button>
        </div>
      </div>

      {/* Header Content */}
      <header className="min-h-screen flex items-center relative overflow-hidden pt-20" id="about">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://public.readdy.ai/ai/img_res/6864980f66a2068978817f9710595a79.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-transparent"></div>
          <div className="absolute inset-0">
            <div className="h-full w-full flex">
              <div className="flex-1"></div>
              <div className="w-1/2 h-full overflow-hidden opacity-10">
                <pre className="text-sm text-primary font-mono animate-typing overflow-hidden whitespace-pre-wrap">
                  {`const Portfolio = {
  name: "Saroj Kumar Ojha",
  role: "Frontend Developer",
  skills: ["React", "Tailwind CSS", "React query"],
  passion: "Building scalable applications",
  code: () => {
    while(true) {
      learn();
      build();
      improve();
      deploy();
    }
  }
};
Portfolio.code();`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="earth-bg"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 slide-in">
              <span className="text-gradient">Saroj Kumar Ojha</span>
              <br />
              <span className="text-gray-300">Frontend Developer</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 slide-in" style={{ animationDelay: '0.2s' }}>
              Passionate frontend developer specializing in building scalable web applications using modern technologies . Experienced in frontend development with a focus on performance and user experience. Aspiring to be a Full stck developer
            </p>
            <div className="flex flex-wrap gap-6 slide-in" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-button text-lg font-semibold flex items-center gap-2"
              >
                View Projects <FiArrowRight />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border bg-indigo-700 rounded-2xl border-gray-700 hover:border-primary text-white px-8 py-4 rounded-button text-lg font-semibold flex items-center gap-2"
              >
                Contact Me <FiSend />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;