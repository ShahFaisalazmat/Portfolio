import React, { useEffect, useRef, useState } from 'react';

const Contact: React.FC = () => {
  const formElements = useRef<(HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement | HTMLAnchorElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          formElements.current.forEach((element, index) => {
            if (element) {
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
              }, 200 * index);
            }
          });
        }
      },
      { threshold: 0.2 }
    );

    const form = document.querySelector('#contact-form');
    if (form) {
      observer.observe(form);
    }

    return () => {
      if (form) {
        observer.unobserve(form);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const mailtoLink = `mailto:shahfaisal.std@gmail.com?subject=Contact%20Form%20Submission%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

  const handleMailtoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Attempt to open the mailto link
    setTimeout(() => {
      // If after a short delay the email client doesn't open (e.g., no client configured),
      // the browser may not navigate away, and we can show a fallback message
      if (document.hasFocus()) {
        alert(
          'It looks like your email client did not open. Please email shahfaisal.std@gmail.com directly or copy the email address to your clipboard.'
        );
      }
    }, 1000); // Delay to allow email client to open
  };

  return (
    <section id="contact" className="min-h-screen bg-[#222] flex flex-col items-center py-16 px-4">
      <h2 className="text-5xl font-bold mb-12" style={{ textShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff' }}>
        Contact Me
      </h2>
      <div id="contact-form" className="max-w-lg w-full bg-[#111] p-8 rounded-lg">
        <div className="chatbot mb-6 p-4 bg-[#333] rounded-lg">
          <p className="text-gray-300">AI Assistant: Hello! I can help you schedule an interview with Shah. Please fill out the form below.</p>
        </div>
        <div className="space-y-4">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            className="w-full p-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f0ff] opacity-0"
            style={{
              transform: 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
            ref={el => formElements.current[0] = el}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            className="w-full p-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f0ff] opacity-0"
            style={{
              transform: 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
            ref={el => formElements.current[1] = el}
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            className="w-full p-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f0ff] opacity-0" 
            rows={4}
            style={{
              transform: 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
            ref={el => formElements.current[2] = el}
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <a 
            href={mailtoLink}
            onClick={handleMailtoClick}
            className="w-full px-6 py-3 bg-[#00f0ff] text-black rounded-full font-semibold hover:bg-white transition-all opacity-0 text-center block"
            style={{
              transform: 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
            ref={el => formElements.current[3] = el}
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;