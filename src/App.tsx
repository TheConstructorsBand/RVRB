import { useState, useEffect } from 'react'
import { Facebook, Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react'
import './App.css'

const speakers = [
  {
    id: 1,
    name: "Ali Farhadi",
    topic: "Open Source AI",
    category: "AI",
    bio: "As an AI professor in the Paul G. Allen School of Computer Science & Engineering at University of Washington, Farhadi's research impact has been globally recognized with several best paper awards at CVPR, NeruIPS, AAAI, NSF Career Award, and the Sloan Fellowship. In 2015, Farhadi joined AI2 to start the Computer Vision team, with a focus on visual common-sense reasoning and the role of actions and interactions in visual understanding. While at AI2, Farhadi co-founded Xnor.ai, the first on-device Deep Learning startup that was acquired by Apple in 2020. Named one of Forbes Top 5 AI Entrepreneurs, Farhadi joins AI2 from Apple, where he led the company's next generation Machine Learning efforts.",
    image: "/img/Farhadi.jpeg"
  },
  {
    id: 2,
    name: "Antonio Gulli",
    topic: "The Architecture of AI",
    category: "AI",
    bio: "Antonio leads strategic initiatives for Google Cloud's Office of the CTO in Zurich, focusing on his areas of strength – AI, Cloud, and Search. Previously, he played a pivotal role in establishing Google's EMEA Office of the CTO and spearheaded the rapid growth of the company's Warsaw site. Antonio is a co-inventor on technologies in search, smart energy, and AI, with 11 patents granted and another 27 pending. He actively shares his knowledge by authoring books on coding and machine learning, translated into multiple languages.",
    image: "/img/Gulli.jpeg"
  },
  {
    id: 3,
    name: "Simone Severini",
    topic: "AI and Proof",
    category: "AI",
    bio: "Simone Severini likes to think that he has the soul of a writer, but it's trapped in the mind of a scientist. He grew up in Sarteano (Siena) and, through a random walk, somehow ended up as a Professor of Physics of Information at University College London, and later as General Manager for Quantum Technologies at Amazon Web Services in Seattle. Along the way, he collaborated with companies like Google, Lockheed Martin, and Siemens, and helped establish research institutes with Caltech and Harvard. Accidentally, he started companies like PhasecraM and Cambridge Quantum Computing (now Quantinuum). When he's not busy complaining about something, thanks to his Tuscan heritage, he's deeply passionate about how science becomes technology.",
    image: "/img/Severini.jpeg"
  },
  {
    id: 4,
    name: "Paul Grewal",
    topic: "Longevity",
    category: "Life Sciences",
    bio: "Paul Grewal, M.D., is an internal medicine physician, author, and speaker who focuses on data-driven nutrition and lifestyle strategies for metabolic health and longevity. Dr. Paul Grewal is co-author of the New York Times best-selling book Genius Foods, an evidence-based guide to dementia prevention and cognitive optimization. He earned a Bachelor of Arts in Cellular and Molecular Neuroscience from Johns Hopkins University, and studied medicine at Rutgers Medical School. He currently splits his time in private practice and as a scientific advisor in New York City.",
    image: "/img/PG.webp"
  },
  {
    id: 5,
    name: "Riccardo Sabatini",
    topic: "Computational Genomics",
    category: "Life Sciences",
    bio: "Riccardo Sabatini is a world renowned scientist and entrepreneur specialising in numerical modelling of complex systems, ranging from material science, to financial markets, computational genomics, and drug design.",
    image: "/img/RS.jpeg"
  },
  {
    id: 6,
    name: "Jeff Leek",
    topic: "Cancer Research",
    category: "Life Sciences",
    bio: "Jeff Leek is an American biostatistician and data scientist working as a Vice President, Chief Data Officer, and Professor at Fred Hutchinson Cancer Research Center. He is an author of the Simply Statistics blog, and runs several online courses through Coursera, as part of their Data Science Specialization. His most popular course is The Data Scientist's Toolbox, which he instructed along with Roger Peng and Brian Caffo. Leek is best known for his contributions to genomic data analysis and critical view of research and the accuracy of popular statistical methods.",
    image: "/img/jeff-leek.jpg"
  },
  {
    id: 7,
    name: "Andrea Borghini",
    topic: "Philosophy of Food",
    category: "Lifestyle",
    bio: "Andrea is Associate Professor in the Philosophy Department at the University of Milan, Italy, and a visiting faculty at the Center for Human Values, Princeton University. His research develops theoretical tools to rethink how we represent, sense, and feel about food, eating, and culinary cultures. He is a co-founder and director of Culinary Mind, the main international network. A native of central Tuscany, when in Italy he resides in Camaiore (Lucca). A passionate surfer since young age, Andrea also enjoys running, trailing, and biking.",
    image: "/img/Borghini_Shot.webp"
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageContainer = entry.target.querySelector('.speaker-image-container');
            if (imageContainer) {
              imageContainer.classList.add('opacity-100');
              
              setTimeout(() => {
                imageContainer.classList.add('translate-x-0');
              }, 200);
              
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.speaker-container');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/img/RVRB-LOGO-navbar.webp" alt="RVRB Logo" className="h-10" />
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#speakers" className="hover:text-blue-400 transition-colors">Speakers</a>
            <a href="#agenda" className="hover:text-blue-400 transition-colors">Agenda</a>
            <a href="#venue" className="hover:text-blue-400 transition-colors">Venue</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md py-4">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              <a 
                href="#home" 
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#speakers" 
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Speakers
              </a>
              <a 
                href="#agenda" 
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agenda
              </a>
              <a 
                href="#venue" 
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Venue
              </a>
              <a 
                href="#contact" 
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
          <img 
            src="/img/RVRB-LOGO-hero.webp" 
            alt="RVRB Logo" 
            className="max-w-[90%] max-h-[80%] object-contain opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            World Innovation<br />Gathering 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8">People, Ideas, Music, Food</p>
          <div className="flex justify-center space-x-8 mt-12">
            <div className="px-6 py-3 border border-white/30 rounded-md backdrop-blur-sm">
              Oct 10th
            </div>
            <div className="px-6 py-3 border border-white/30 rounded-md backdrop-blur-sm">
              Brooklyn, NY
            </div>
          </div>
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
          <a href="#" className="text-white hover:text-blue-400 transition-colors"><Facebook size={24} /></a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors"><Instagram size={24} /></a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Agenda</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>16:00</span>
                <span>Meet &amp; Greet</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>17:00</span>
                <span>Speaking Sessions</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>19:30</span>
                <span>Cocktails - Performance from Atlantic Ensemble</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>20:00</span>
                <span>Dinner by Tommaso Arrigoni</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h2 className="text-4xl font-bold">01</h2>
                <h5 className="text-sm uppercase tracking-wider mt-2">DAY</h5>
              </div>
              <div>
                <h2 className="text-4xl font-bold">07</h2>
                <h5 className="text-sm uppercase tracking-wider mt-2">SPEAKERS</h5>
              </div>
              <div>
                <h2 className="text-4xl font-bold">∞</h2>
                <h5 className="text-sm uppercase tracking-wider mt-2">IDEAS</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center text-purple-300">Speakers</h2>
          <p className="text-center mb-16">07 FEATURED INDUSTRY EXPERTS</p>
          
          {/* Added 10% margin on both sides */}
          <div className="space-y-32 mx-[10%]">
            {speakers.map((speaker) => (
              <div 
                key={speaker.id} 
                className="speaker-container"
              >
                <div className={`flex flex-col ${speaker.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
                  {/* Speaker Image - Increased size by 20% */}
                  <div 
                    className={`speaker-image-container w-full md:w-1/4 overflow-hidden rounded-lg transition-all duration-700 transform opacity-0 ${
                      speaker.id % 2 === 0 ? 'translate-x-20' : '-translate-x-20'
                    }`}
                  >
                    <div className="relative">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="w-full aspect-[3/4] object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  {/* Speaker Info - Increased font sizes */}
                  <div className="w-full md:w-3/4 space-y-6 relative">
                    {/* Vertical category and number positioned correctly */}
                    <div className={`absolute ${speaker.id % 2 === 0 ? 'right-0 mr-[-8rem]' : 'right-full mr-4'} top-0 h-full flex flex-col items-center`}>
                      <div className="h-full flex flex-col items-center justify-start space-y-4">
                        <div className="text-5xl font-bold text-purple-300 writing-mode-vertical">
                          {speaker.id < 10 ? `0${speaker.id}` : speaker.id}
                        </div>
                        <div className="w-px h-20 bg-purple-500/50"></div>
                        <div className="bg-purple-500/20 px-3 py-5">
                          <span className="writing-mode-vertical text-sm font-semibold tracking-wider text-purple-300">
                            {speaker.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pl-8 space-y-3">
                      <h3 className="text-4xl md:text-5xl font-bold">{speaker.name}</h3>
                      <p className="text-2xl md:text-3xl text-gray-400">{speaker.topic}</p>
                    </div>
                    
                    <p className="text-xl leading-relaxed text-gray-300">{speaker.bio}</p>
                    
                    <div className="pt-6 border-t border-purple-500/20 flex justify-between items-center">
                      <span className="text-xs uppercase tracking-wider">FOLLOW</span>
                      <div className="flex space-x-3">
                        <a href="#" className="text-white hover:text-purple-400 transition-colors">
                          <Twitter size={18} />
                        </a>
                        <a href="#" className="text-white hover:text-purple-400 transition-colors">
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden">
              <img 
                src="/img/Venue.jpg" 
                alt="Venue" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">The Venue</h2>
              <div className="mb-6">
                <p>Undisclosed Location</p>
                <p>Greenpoint, Brooklyn</p>
              </div>
              <p className="text-gray-300">
                Studio47 Is a concept born out of passion for music and the purpose of good things for humanity. 
                Located in a restored paper factory in Greenpoint, Brooklyn, Studio47 hosts a state of the art 
                Analog recording studio, a Tape restoration lab, and a Live Venue where artists of the caliber 
                of Bill Frisell, Catherine Russell, Kishi Bashi, Cecile McLauren Salvant, Adam Levy have performed 
                and recorded music to support our cause of curing cancer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Contact */}
      <footer id="contact" className="py-20 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">RVRB</h2>
              <p className="text-xl mb-6">World Innovation Gathering 2024</p>
              <p className="uppercase text-sm tracking-wider">Stay ahead of the curve</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">What</h4>
              <p className="mb-4">RVRB Innovation Gathering</p>
              
              <h4 className="font-bold mb-2">When</h4>
              <p className="mb-4">Oct 10th 2024</p>
              
              <h4 className="font-bold mb-2">Where</h4>
              <p>Undisclosed Location</p>
              <p>Greenpoint, Brooklyn</p>
            </div>
            <div className="h-64 bg-blue-900/20 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7153041525397!2d-73.95914368459407!3d40.72971497933105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25947f499781f%3A0x5e0b79eb11f6a616!2sGreenpoint%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1648133810461!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
              ></iframe>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-white/20 text-center">
            <p>&copy; 2024 RVRB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
