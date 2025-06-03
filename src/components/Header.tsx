
import { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    // Scroll to top immediately when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'auto' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={() => handleNavigation('/')} className="flex items-center space-x-2 space-x-reverse">
            <Heart className="w-8 h-8 text-medical-blue" />
            <div>
              <h1 className="text-2xl font-bold text-medical-blue">شركة اغابي</h1>
              <p className="text-xs text-gray-600">خدمات التمريض المنزلي</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 space-x-reverse">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              من نحن
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              خدماتنا
            </button>
            <button
              onClick={() => handleNavigation('/medical-services')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              الخدمات الطبية
            </button>
            <button 
              onClick={() => handleNavigation('/medical-supplies')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              المستلزمات الطبية
            </button>
            <button 
              onClick={() => handleNavigation('/nursing-jobs')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              التوظيف
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-medical text-white px-6 py-2 rounded-full font-medium"
            >
              تواصل معنا
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right px-4"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right px-4"
              >
                من نحن
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right px-4"
              >
                خدماتنا
              </button>
              <button
                onClick={() => handleNavigation('/medical-services')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right px-4"
              >
                الخدمات الطبية
              </button>
              <button 
                onClick={() => handleNavigation('/medical-supplies')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right px-4"
              >
                المستلزمات الطبية
              </button>
              <button 
                onClick={() => handleNavigation('/nursing-jobs')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right px-4"
              >
                التوظيف
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-medical text-white px-6 py-2 rounded-full font-medium mx-4"
              >
                تواصل معنا
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
