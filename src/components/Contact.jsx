import { useState } from 'react';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiGithubLine, RiLinkedinLine, RiTwitterLine, RiDribbbleLine, RiSendPlaneLine } from 'react-icons/ri';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowModal(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <RiMailLine className="text-2xl text-primary" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:contact@example.com" className="text-lg hover:text-primary">contact@example.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <RiPhoneLine className="text-2xl text-primary" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+1234567890" className="text-lg hover:text-primary">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <RiMapPinLine className="text-2xl text-primary" />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-lg">San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Social Links</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-primary/10 rounded-lg transition-colors">
                  <RiGithubLine className="text-2xl" />
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-primary/10 rounded-lg transition-colors">
                  <RiLinkedinLine className="text-2xl" />
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-primary/10 rounded-lg transition-colors">
                  <RiTwitterLine className="text-2xl" />
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-primary/10 rounded-lg transition-colors">
                  <RiDribbbleLine className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows="5" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-button font-semibold flex items-center justify-center gap-2"
            >
              Send Message
              <RiSendPlaneLine />
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="bg-gray-800 p-8 rounded-lg relative z-10 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiCheckLine className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-400 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
              <button 
                onClick={() => setShowModal(false)}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;