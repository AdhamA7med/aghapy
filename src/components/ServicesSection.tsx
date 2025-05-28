
import { Heart, Stethoscope, Cross } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const services = [
    {
      icon: Heart,
      title: "رعاية كبار السن",
      description: "رعاية شاملة ومتخصصة لكبار السن مع الاهتمام بجميع احتياجاتهم الطبية والنفسية",
      color: "medical-blue"
    },
    {
      icon: Stethoscope,
      title: "تمريض ما بعد العمليات",
      description: "متابعة طبية دقيقة وعناية متخصصة للمرضى في فترة النقاهة بعد العمليات الجراحية",
      color: "medical-teal"
    },
    {
      icon: Cross,
      title: "جلسات علاج طبيعي",
      description: "برامج علاج طبيعي مخصصة لإعادة التأهيل واستعادة الحركة والقوة",
      color: "medical-green"
    },
    {
      icon: Heart,
      title: "تمريض أطفال وحديثي الولادة",
      description: "رعاية متخصصة للأطفال والرضع مع خبرة في التعامل مع الحالات الخاصة",
      color: "medical-blue"
    },
    {
      icon: Stethoscope,
      title: "التمريض الليلي والنهاري",
      description: "خدمة تمريض متاحة على مدار الساعة لضمان الرعاية المستمرة",
      color: "medical-teal"
    },
    {
      icon: Cross,
      title: "إدارة الأدوية والحقن",
      description: "إعطاء الأدوية والحقن بدقة ومتابعة الجرعات حسب وصفة الطبيب",
      color: "medical-green"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-medical-blue to-medical-teal rounded-full p-4 shadow-lg hover-lift">
              <Stethoscope className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">خدماتنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات التمريض المنزلي والرعاية الطبية المتخصصة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`service-card medical-card rounded-2xl p-8 h-full transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'scale-in visible' : 'scale-in'
                }`}
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${service.color}/10 mb-6`}>
                    <IconComponent className={`w-8 h-8 text-${service.color} medical-icon`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Call to Action */}
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full bg-${service.color}/10 hover:bg-${service.color}/20 text-${service.color} font-semibold py-3 px-6 rounded-full transition-all duration-300 hover-lift`}
                  >
                    احجز الآن
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="medical-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">جميع خدماتنا متاحة 24/7</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              نحن ملتزمون بتقديم أفضل مستويات الرعاية الطبية في راحة منزلكم، مع فريق طبي مؤهل ومتاح في أي وقت من اليوم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:01099843535"
                className="btn-medical text-white px-8 py-3 rounded-full font-semibold hover-lift flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                اتصل الآن: 01099843535
              </a>
              <a 
                href="https://wa.me/201099843535"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                </svg>
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
