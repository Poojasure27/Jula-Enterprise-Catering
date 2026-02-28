import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChefHat, Building2, Clock, ShieldCheck, Users, 
  ArrowRight, Star, Quote, ChevronRight, ChevronLeft, Play
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onOpenGallery }: { onOpenGallery: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-3xl font-display font-black tracking-tighter text-ink flex items-center gap-2">
          <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center text-white">
            <ChefHat size={20} />
          </div>
          JULA<span className="text-saffron">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
          <a href="#menu" className="hover:text-saffron transition-colors">Menu</a>
          <a href="#why-us" className="hover:text-emerald transition-colors">Why Us</a>
          <button onClick={onOpenGallery} className="hover:text-cobalt transition-colors">Our Kitchen</button>
          <button className="bg-ink text-white px-6 py-3 rounded-full hover:bg-saffron transition-colors hover-expand">
            Book Tasting
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const FloatingElement = ({ children, delay = 0, yOffset = 20, duration = 4, className = "" }: any) => (
  <motion.div
    animate={{ y: [0, -yOffset, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Splashes */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-saffron/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-emerald/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-cobalt/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Floating Food Elements */}
      <FloatingElement delay={0} className="top-1/4 left-10 w-32 h-32 md:w-48 md:h-48 z-10">
        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80" alt="Food" className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white" />
      </FloatingElement>
      <FloatingElement delay={1} duration={5} className="bottom-1/4 right-10 w-40 h-40 md:w-56 md:h-56 z-10">
        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80" alt="Food" className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white" />
      </FloatingElement>
      <FloatingElement delay={2} duration={4.5} className="top-1/3 right-1/4 w-24 h-24 z-10 opacity-80">
        <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80" alt="Spice" className="w-full h-full object-cover rounded-full shadow-xl" />
      </FloatingElement>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.85] tracking-tighter mb-6">
              ENTERPRISE<br/>
              <span className="text-saffron">CATERING,</span><br/>
              <span className="text-transparent text-stroke">ELEVATED.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-ink/70 font-medium mb-10 max-w-2xl mx-auto"
          >
            Scale. Reliability. Premium Quality. We fuel India's leading corporate teams with unforgettable culinary experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-saffron text-white rounded-full font-bold text-lg hover:bg-ink transition-colors hover-expand flex items-center justify-center gap-2">
              View Menu <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-ink border-2 border-ink rounded-full font-bold text-lg hover:bg-ink hover:text-white transition-colors hover-expand">
              Book Corporate Tasting
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MENU_CATEGORIES = ['Vegetarian', 'Non-Vegetarian', 'Seafood', 'Live Counters', 'Corporate Buffets', 'Executive Platters'];
const PROTEINS = ['All', 'Chicken', 'Mutton', 'Fish', 'Paneer', 'Tofu', 'Mixed'];

const MENU_ITEMS = [
  { id: 1, name: 'Saffron Infused Biryani', category: 'Non-Vegetarian', protein: 'Mutton', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80', color: 'bg-saffron' },
  { id: 2, name: 'Emerald Herb Crusted Salmon', category: 'Seafood', protein: 'Fish', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80', color: 'bg-emerald' },
  { id: 3, name: 'Smoked Paneer Tikka', category: 'Vegetarian', protein: 'Paneer', image: 'https://images.unsplash.com/photo-1599487405705-8161c05c74ce?w=800&q=80', color: 'bg-coral' },
  { id: 4, name: 'Executive Asian Bowl', category: 'Executive Platters', protein: 'Tofu', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80', color: 'bg-cobalt' },
  { id: 5, name: 'Live Pasta Station', category: 'Live Counters', protein: 'Mixed', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80', color: 'bg-saffron' },
  { id: 6, name: 'Grand Corporate Spread', category: 'Corporate Buffets', protein: 'Mixed', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', color: 'bg-emerald' },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Non-Vegetarian');
  const [activeProtein, setActiveProtein] = useState('All');

  const filteredItems = MENU_ITEMS.filter(item => 
    (activeCategory === 'All' || item.category === activeCategory) &&
    (activeProtein === 'All' || item.protein === activeProtein)
  );

  return (
    <section id="menu" className="py-32 bg-ink text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-4">
              Explosive <br/><span className="text-coral">Flavors.</span>
            </h2>
            <p className="text-xl text-cream/70 max-w-md">Curated menus designed to impress executives and satisfy thousands.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-end max-w-2xl">
            {MENU_CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat ? 'bg-coral text-white' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-3 items-center">
          <span className="text-sm font-bold uppercase tracking-widest text-cream/50 mr-2">Filter by Protein:</span>
          {PROTEINS.map(protein => (
            <button 
              key={protein}
              onClick={() => setActiveProtein(protein)}
              className={`px-3 py-1 rounded-md text-xs font-bold uppercase transition-all ${
                activeProtein === protein ? 'bg-white text-ink' : 'border border-white/20 text-white/70 hover:border-white/50'
              }`}
            >
              {protein}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                key={item.id}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 ${item.color} mix-blend-multiply opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2 block">{item.category} • {item.protein}</span>
                  <h3 className="text-3xl font-display font-black leading-tight text-white mb-4 group-hover:text-transparent group-hover:text-stroke-white transition-all duration-500">
                    {item.name}
                  </h3>
                  <div className="w-12 h-1 bg-white rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    { icon: <Users size={32} />, title: "5,000+ Meals/Day", desc: "Unmatched scale without compromising a single detail.", color: "bg-saffron" },
    { icon: <Clock size={32} />, title: "On-Time Delivery", desc: "Precision logistics for zero-delay corporate events.", color: "bg-emerald" },
    { icon: <ChefHat size={32} />, title: "Custom Menus", desc: "Tailored culinary experiences for diverse workforces.", color: "bg-cobalt" },
    { icon: <ShieldCheck size={32} />, title: "FSSAI Compliant", desc: "Highest standards of hygiene and food safety.", color: "bg-coral" },
    { icon: <Star size={32} />, title: "Dedicated Account Managers", desc: "Single point of contact for seamless enterprise operations.", color: "bg-ink" },
  ];

  return (
    <section id="why-us" className="py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-ink mb-6">
            The Enterprise <br/><span className="text-emerald">Standard.</span>
          </h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">We don't just cater; we engineer culinary operations for India's most demanding corporate environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-ink/5 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${f.color} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className={`w-16 h-16 ${f.color} text-white rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-ink">{f.title}</h3>
              <p className="text-ink/70 font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { quote: "Jula Enterprise transformed our cafeteria. 3,000 employees, zero complaints, absolute perfection daily.", author: "Sarah Jenkins", role: "VP Operations, TechGlobal MNC", logo: "TG" },
    { quote: "The executive platters for our board meetings are Michelin-star quality. They understand corporate prestige.", author: "Rajiv Mehta", role: "Director, Apex Financial", logo: "AF" },
    { quote: "Scale meets hygiene. Their kitchen operations are a masterclass in enterprise food management.", author: "Priya Sharma", role: "Head of Admin, Nexus Corp", logo: "NC" },
  ];

  return (
    <section className="py-32 bg-saffron text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-1 bg-white"></div>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-widest">Trusted By Giants</h2>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[500px] bg-ink p-10 rounded-3xl snap-center relative">
              <Quote className="absolute top-8 right-8 text-white/10" size={80} />
              <div className="flex gap-1 text-coral mb-8">
                {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={20} />)}
              </div>
              <p className="text-2xl md:text-3xl font-display font-medium leading-tight mb-10 relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white text-ink rounded-full flex items-center justify-center font-black text-xl">
                  {t.logo}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.author}</h4>
                  <p className="text-white/60 text-sm uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-ink text-cream pt-32 pb-12 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cobalt/20 to-transparent"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
        <div>
          <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-8">
            Let's <br/><span className="text-emerald">Talk</span> Scale.
          </h2>
          <p className="text-xl text-cream/70 max-w-md mb-8">Ready to elevate your corporate dining experience? Our account managers are standing by.</p>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron transition-colors cursor-pointer"><Building2 size={20} /></div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald transition-colors cursor-pointer"><Users size={20} /></div>
          </div>
        </div>
        
        <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-bold mb-6">Corporate Inquiry</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Company Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-saffron transition-colors" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Contact Person" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-saffron transition-colors" />
              <input type="text" placeholder="Daily Meal Count" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-saffron transition-colors" />
            </div>
            <input type="email" placeholder="Corporate Email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-saffron transition-colors" />
            <button className="w-full bg-saffron text-white font-bold py-4 rounded-xl hover:bg-white hover:text-ink transition-colors uppercase tracking-widest mt-4">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display font-black tracking-tighter flex items-center gap-2">
          JULA<span className="text-saffron">.</span>
        </div>
        <p className="text-cream/50 text-sm font-medium uppercase tracking-widest">Serving India's Leading Enterprises</p>
        <div className="text-cream/50 text-sm">© 2026 Jula Enterprise. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

const KitchenGallery = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { url: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=1600&q=80", caption: "State-of-the-art Stainless Steel Operations" },
    { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80", caption: "Immaculate Hygiene Standards" },
    { url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1600&q=80", caption: "Our Culinary Experts in Action" },
    { url: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1600&q=80", caption: "Mass Scale Preparation Zone" }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
        >
          <button onClick={onClose} className="absolute top-8 right-8 text-white hover:text-saffron z-50 transition-colors">
            <X size={40} />
          </button>
          
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].url}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.6, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
            <button onClick={prev} className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-ink transition-all">
              <ChevronLeft size={32} />
            </button>
            
            <div className="text-center">
              <motion.h2 
                key={currentIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-widest mb-4"
              >
                Our Kitchen
              </motion.h2>
              <motion.p
                key={`p-${currentIndex}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/80 font-medium bg-ink/50 px-6 py-2 rounded-full inline-block backdrop-blur-sm"
              >
                {images[currentIndex].caption}
              </motion.p>
            </div>

            <button onClick={next} className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-ink transition-all">
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-saffron' : 'w-2 bg-white/30'}`} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="font-sans selection:bg-saffron selection:text-white">
      <Navbar onOpenGallery={() => setIsGalleryOpen(true)} />
      <Hero />
      <WhyUs />
      <MenuSection />
      <Testimonials />
      <Footer />
      <KitchenGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  );
}
