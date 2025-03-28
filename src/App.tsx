import { useState } from 'react'
import { Facebook, Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react'
import './App.css'

const speakers = [
  {
    id: 1,
    name: "Ali Farhadi",
    topic: "Open Source AI",
    category: "AI",
    bio: "As an AI professor in the Paul G. Allen School of Computer Science & Engineering at University of Washington, Farhadi's research impact has been globally recognized with several best paper awards at CVPR, NeruIPS, AAAI, NSF Career Award, and the Sloan Fellowship. In 2015, Farhadi joined AI2 to start the Computer Vision team, with a focus on visual common-sense reasoning and the role of actions and interactions in visual understanding.",
    image: "/img/Farhadi.jpeg"
  },
  {
    id: 2,
    name: "Antonio Gulli",
    topic: "The Architecture of AI",
    category: "AI",
    bio: "Antonio leads strategic initiatives for Google Cloud's Office of the CTO in Zurich, focusing on his areas of strength – AI, Cloud, and Search. Previously, he played a pivotal role in establishing Google's EMEA Office of the CTO and spearheaded the rapid growth of the company's Warsaw site.",
    image: "/img/Gulli.jpeg"
  },
  {
    id: 3,
    name: "Simone Severini",
    topic: "AI and Proof",
    category: "AI",
    bio: "Simone Severini likes to think that he has the soul of a writer, but it's trapped in the mind of a scientist. He grew up in Sarteano (Siena) and, through a random walk, somehow ended up as a Professor of Physics of Information at University College London, and later as General Manager for Quantum Technologies at Amazon Web Services in Seattle.",
    image: "/img/Severini.jpeg"
  },
  {
    id: 4,
    name: "Paul Grewal",
    topic: "Longevity",
    category: "Life Sciences",
    bio: "Paul Grewal, M.D., is an internal medicine physician, author, and speaker who focuses on data-driven nutrition and lifestyle strategies for metabolic health and longevity. Dr. Paul Grewal is co-author of the New York Times best-selling book Genius Foods, an evidence-based guide to dementia prevention and cognitive optimization.",
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
    bio: "Jeff Leek is an American biostatistician and data scientist working as a Vice President, Chief Data Officer, and Professor at Fred Hutchinson Cancer Research Center. He is an author of the Simply Statistics blog, and runs several online courses through Coursera, as part of their Data Science Specialization.",
    image: "/img/jeff-leek.jpg"
  },
  {
    id: 7,
    name: "Andrea Borghini",
    topic: "Philosophy of Food",
    category: "Lifestyle",
    bio: "Andrea is Associate Professor in the Philosophy Department at the University of Milan, Italy, and a visiting faculty at the Center for Human Values, Princeton University. His research develops theoretical tools to rethink how we represent, sense, and feel about food, eating, and culinary cultures.",
    image: "/img/Borghini_Shot.webp"
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/img/RVRB-LOGO PAGE_Dark.png" alt="RVRB Logo" className="h-10" />
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
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/RVRB-LOGO-hero.webp" 
            alt="RVRB Logo" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/70"></div>
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
          <h2 className="text-4xl font-bold mb-4 text-center">The Speakers</h2>
          <p className="text-center mb-12">07 FEATURED INDUSTRY EXPERTS</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 relative overflow-hidden">
                <div className="text-sm font-bold mb-2 z-10 relative">0{speaker.id}</div>
                <div className="absolute top-0 right-0 px-3 py-1 bg-blue-500/20 text-xs font-semibold">
                  {speaker.category}
                </div>
                <div className="h-64 mb-4 rounded-md overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                <p className="text-blue-400 mb-4">{speaker.topic}</p>
                <p className="text-sm text-gray-300 line-clamp-3">{speaker.bio}</p>
                <div className="mt-4 pt-4 border-t border-blue-500/20 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider">FOLLOW</span>
                  <div className="flex space-x-2">
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <Twitter size={16} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <Linkedin size={16} />
                    </a>
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
