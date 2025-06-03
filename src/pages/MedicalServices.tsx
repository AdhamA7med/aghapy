
import { Stethoscope, Activity, Heart, Users, Phone, MessageCircle, Clock, Shield, MapPin, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingPhoneButton from '@/components/FloatingPhoneButton';
import { useEffect, useRef, useState } from 'react';

const MedicalServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
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

  const services = [
    {
      icon: Activity,
      title: "خدمة تحاليل منزلية",
      description: "نقدم جميع أنواع التحاليل الطبية في راحة منزلك مع النتائج الدقيقة والسريعة",
      features: [
        "تحاليل دم شاملة",
        "تحاليل البول والبراز", 
        "تحاليل الهرمونات",
        "تحاليل السكر والدهون",
        "نتائج دقيقة خلال 24 ساعة"
      ],
      whatsapp: "01211112471",
      color: "medical-blue"
    },
    {
      icon: Heart,
      title: "رسم قلب منزلي",
      description: "فحص القلب بأحدث الأجهزة في المنزل مع تقرير مفصل من أطباء متخصصين",
      features: [
        "رسم قلب بأحدث الأجهزة",
        "تقرير طبي مفصل",
        "أطباء قلب متخصصين",
        "متابعة دورية للحالات المزمنة",
        "خدمة طوارئ 24/7"
      ],
      whatsapp: "01211112471", 
      color: "medical-teal"
    },
    {
      icon: Users,
      title: "تمريض منزلي",
      description: "فريق تمريض محترف ومؤهل لتقديم أفضل رعاية طبية في المنزل",
      features: [
        "ممرضين مؤهلين ومعتمدين",
        "رعاية كبار السن",
        "رعاية ما بعد العمليات",
        "إعطاء الحقن والأدوية",
        "متابعة العلامات الحيوية"
      ],
      whatsapp: "01211112471",
      color: "medical-green"
    },
    {
      icon: Stethoscope,
      title: "زيارات طبية منزلية",
      description: "أطباء متخصصين يأتون إليك في المنزل للكشف والمتابعة الطبية",
      features: [
        "أطباء باطنة وعائلة",
        "كشف طبي شامل",
        "وصف العلاج المناسب",
        "متابعة الحالات المرضية",
        "تقارير طبية مفصلة"
      ],
      whatsapp: "01211112471",
      color: "medical-blue"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "متاح 24/7",
      description: "خدماتنا متاحة على مدار الساعة"
    },
    {
      icon: Shield,
      title: "معايير عالية للجودة",
      description: "نلتزم بأعلى معايير الجودة والأمان"
    },
    {
      icon: MapPin,
      title: "تغطية شاملة",
      description: "نغطي جميع مناطق القاهرة الكبرى"
    },
    {
      icon: Star,
      title: "فريق متخصص",
      description: "أطباء وممرضين مؤهلين ومعتمدين"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-teal-50" role="banner">
        <div className="container mx-auto px-4">
          <header className="text-center mb-8">
            <div className="flex justify-center mb-6" aria-hidden="true">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Stethoscope className="w-12 h-12 text-medical-blue" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">الخدمات الطبية المنزلية</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              خدماتنا متاحة 24/7 اطلبنا هتلاقينا - رعاية طبية متخصصة في راحة منزلك
            </p>
          </header>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:01211112471"
              className="bg-medical-blue hover:bg-medical-blue/90 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
              aria-label="اتصل على الرقم 01211112471"
            >
              <Phone className="w-5 h-5" />
              اتصل: 01211112471
            </a>
            <a 
              href="https://wa.me/201211112471"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              aria-label="تواصل عبر الواتساب على الرقم 01211112471"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب: 01211112471
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main ref={sectionRef} className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Services Grid */}
          <section className={`mb-16 transition-all duration-1000 ${isVisible ? 'fade-in visible' : 'fade-in'}`} aria-labelledby="services-heading">
            <header className="text-center mb-12">
              <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">خدماتنا المتخصصة</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">نقدم مجموعة شاملة من الخدمات الطبية المنزلية عالية الجودة</p>
            </header>
            
            <div className="grid md:grid-cols-2 gap-8" role="list">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <article 
                    key={index}
                    className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 delay-${index * 100} hover:shadow-xl hover:transform hover:scale-105 ${
                      isVisible ? 'scale-in visible' : 'scale-in'
                    }`}
                    role="listitem"
                  >
                    <header className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${service.color}/10 mb-4`} aria-hidden="true">
                        <IconComponent className={`w-8 h-8 text-${service.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                    </header>

                    <div className="mb-6">
                      <ul className="text-right space-y-3" role="list">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-700 flex items-start" role="listitem">
                            <span className={`w-2 h-2 bg-${service.color} rounded-full mt-2 ml-3 flex-shrink-0`} aria-hidden="true"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <a 
                        href={`https://wa.me/2${service.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2"
                        aria-label={`اطلب خدمة ${service.title} عبر الواتساب`}
                      >
                        <MessageCircle className="w-5 h-5" />
                        اطلب الخدمة
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Features Section */}
          <section className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'fade-in visible' : 'fade-in'}`} aria-labelledby="features-heading">
            <header className="text-center mb-12">
              <h2 id="features-heading" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h2>
            </header>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <article 
                    key={index}
                    className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                    role="listitem"
                  >
                    <div className="w-12 h-12 bg-medical-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                      <IconComponent className="w-6 h-6 text-medical-blue" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Contact Section */}
          <section className={`transition-all duration-1000 delay-600 ${isVisible ? 'fade-in visible' : 'fade-in'}`} aria-labelledby="contact-heading">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h2 id="contact-heading" className="text-2xl font-bold text-gray-800 mb-4">اطلب خدمتك الآن</h2>
              <p className="text-gray-600 mb-6">فريقنا جاهز لخدمتك على مدار الساعة</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:01211112471"
                  className="bg-medical-blue hover:bg-medical-blue/90 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
                  aria-label="اتصل على الرقم 01211112471"
                >
                  <Phone className="w-5 h-5" />
                  اتصل الآن: 01211112471
                </a>
                <a 
                  href="https://wa.me/201211112471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  aria-label="تواصل عبر الواتساب على الرقم 01211112471"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب: 01211112471
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <FloatingPhoneButton />
    </div>
  );
};

export default MedicalServices;
