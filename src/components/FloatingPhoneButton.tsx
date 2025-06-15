
import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingPhoneButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="tel:01095113838"
      className="fixed bottom-20 right-4 sm:bottom-24 sm:right-5 md:bottom-28 md:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-medical-blue hover:bg-medical-teal text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-40 animate-bounce hover:animate-none touch-target"
      title="اتصل بنا الآن"
      aria-label="اتصل بنا الآن"
      style={{
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
      <span className="absolute -top-1 -left-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -left-1 w-3 h-3 bg-red-500 rounded-full"></span>
    </a>
  );
};

export default FloatingPhoneButton;
