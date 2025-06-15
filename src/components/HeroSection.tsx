
import { Heart, Stethoscope } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 medical-gradient opacity-10"></div>
      
      {/* Floating Medical Icons */}
      <div className="absolute top-20 left-10 floating-animation">
        <Heart className="w-12 h-12 text-medical-blue/30" />
      </div>
      <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '1s' }}>
        <Stethoscope className="w-16 h-16 text-medical-teal/30" />
      </div>
      <div className="absolute bottom-40 left-20 floating-animation" style={{ animationDelay: '2s' }}>
        <Heart className="w-10 h-10 text-medical-green/30" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          {/* Logo */}
          <div className="flex justify-center items-center mb-8">
            <div className="bg-white rounded-full p-6 shadow-2xl hover-lift">
              <Heart className="w-16 h-16 text-medical-blue medical-icon" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            مرحباً بكم في
            <span className="text-medical-blue block mt-2">شركة اغابي</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            نقدم أفضل خدمات التمريض المنزلي والرعاية الطبية المتخصصة في القاهرة
            <br />
            <span className="text-medical-teal font-medium">مع فريق طبي مؤهل ومتاح 24/7</span>
          </p>

          {/* Call to Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <button 
              onClick={scrollToContact}
              className="btn-medical text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover-lift"
            >
              <Heart className="w-5 h-5" />
تواصل معنا 
            
            </button>
            
            <a 
              href="https://wa.me/201095113838"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
              </svg>
              تواصل واتساب
            </a>
          </div>

          {/* Statistics */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'scale-in visible' : 'scale-in'}`}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-medical-blue counter">500+</div>
              <p className="text-gray-600 mt-2">عميل راضٍ</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-medical-teal counter">24/7</div>
              <p className="text-gray-600 mt-2">خدمة متاحة</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-medical-green counter">10+</div>
              <p className="text-gray-600 mt-2">سنوات خبرة</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-medical-blue counter">100%</div>
              <p className="text-gray-600 mt-2">جودة مضمونة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
