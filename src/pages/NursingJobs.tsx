
import { FileText, MapPin, Phone, MessageCircle, ExternalLink, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NursingJobs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0,
        rootMargin: '0px 0px -10px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const requiredDocs = [
    'صورة البطاقة',
    'ورقة إثبات سكن (وصل نور أو كهرباء أو أي فاتورة)',
    'شهادة الميلاد',
    'صورة شخصية',
    'فيش وتشبيه',
    'صورة من كارنيه نقابة التمريض (إذا كنت من التمريض)'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-medical-blue/10 to-medical-teal/10">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Users className="w-12 h-12 text-medical-blue" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">انضم لفريق العمل</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              للتقديم على وظائف التمريض ومساعدين التمريض بشركة أغابي
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-16">
        <div className="container mx-auto">
          
          {/* Application Process */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="medical-card rounded-2xl p-8 text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">التقديم من المكتب بالأوراق المطلوبة</h2>
              <div className="flex items-center justify-center gap-2 text-medical-blue mb-4">
                <MapPin className="w-6 h-6" />
                <h3 className="text-xl font-bold">العنوان</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                120 شارع النزهة ميدان تريومف مصر الجديدة
              </p>
            </div>
          </div>

          {/* Required Documents */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">الأوراق المطلوبة</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requiredDocs.map((doc, index) => (
                <div key={index} className="medical-card rounded-xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-medical-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-5 h-5 text-medical-blue" />
                      </div>
                      <p className="text-gray-800 font-medium leading-relaxed">{doc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Methods */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">طرق التقديم</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Online Application */}
              <div className="medical-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-medical-blue/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-medical-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">التقديم أونلاين</h3>
                <p className="text-gray-600 mb-6">قدم طلبك إلكترونياً من خلال النموذج الإلكتروني</p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSftIxLY_gbDDyAcboK5BsGRLDErHQZ6LUOaIvRi6PgeNfV-0Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-medical text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover-lift"
                >
                  <ExternalLink className="w-5 h-5" />
                  تقديم الطلب
                </a>
              </div>

              {/* Contact Info */}
              <div className="medical-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">تواصل معنا</h3>
                <p className="text-gray-600 mb-6">للاستفسار أو المساعدة في عملية التقديم</p>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/201276226680"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 hover-lift w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    واتساب: 01276226680
                  </a>
                  <a 
                    href="https://wa.me/201276475528"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 hover-lift w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    واتساب: 01276475528
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="medical-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">لماذا تعمل معنا؟</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-medical-blue" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">بيئة عمل مميزة</h4>
                  <p className="text-gray-600 text-sm">فريق عمل متعاون ومحترف</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-medical-teal/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-medical-teal" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">تطوير مهني</h4>
                  <p className="text-gray-600 text-sm">فرص تدريب وتطوير مستمر</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-medical-green" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">مرونة في العمل</h4>
                  <p className="text-gray-600 text-sm">مواعيد عمل مرنة ومناسبة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NursingJobs;
