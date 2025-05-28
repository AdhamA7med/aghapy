
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/201099843535"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 animate-pulse hover:animate-none"
      title="تواصل معنا عبر الواتساب"
      aria-label="تواصل معنا عبر الواتساب"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </a>
  );
};

export default WhatsAppFloat;
