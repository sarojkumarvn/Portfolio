const Footer = () => {
    return (
      <footer className="py-8 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Saroj Kumar Ojha. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;