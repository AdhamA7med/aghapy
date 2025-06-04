
import { Heart, Stethoscope, Cross } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const WhyUsSection = () => {
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
        threshold: 0.01,
        rootMargin: '100px 0px -50px 0px'
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

  const benefits = [
    {
      icon: Heart,
      title: "خبرة وكفاءة",
      description: "فريق طبي متخصص مع سنوات من الخبرة في مجال التمريض المنزلي والرعاية الطبية",
      stats: "10+ سنوات خبرة"
    },
    {
      icon: Stethoscope,
      title: "متابعة طبية مستمرة",
      description: "نظام متابعة دقيق ومستمر للحالة الصحية مع تقارير دورية للأطباء المعالجين",
      stats: "متابعة 24/7"
    },
    {
      icon: Cross,
      title: "أسعار مناسبة",
      description: "خدمات عالية الجودة بأسعار تنافسية ومناسبة لجميع الفئات مع إمكانية الدفع المرن",
      stats: "أسعار تنافسية"
    },
    {
      icon: Heart,
      title: "فريق متمرس",
      description: "ممرضين وممرضات مؤهلين ومدربين على أحدث البروتوكولات الطبية والتعامل مع الطوارئ",
      stats: "فريق مؤهل 100%"
    }
  ];

  return (
    <section ref={sectionRef} id="why-us" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg hover-lift">
              <Cross className="w-12 h-12 text-medical-teal medical-icon" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">لماذا نحن؟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نتميز بالعديد من المزايا التي تجعلنا الخيار الأفضل لخدمات التمريض المنزلي
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className={`text-center transition-all duration-1000 delay-${index * 150} ${
                  isVisible ? 'scale-in visible' : 'scale-in'
                }`}
              >
                <div className="medical-card rounded-2xl p-8 h-full hover-lift">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6">
                    <IconComponent className="w-8 h-8 text-medical-teal medical-icon" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {benefit.title}
                  </h3>

                  {/* Stats */}
                  <div className="text-2xl font-bold text-medical-blue mb-4">
                    {benefit.stats}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="medical-card rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">مؤشرات الثقة والجودة</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-medical-blue mb-2">500+</div>
                <p className="text-gray-600">عميل راضٍ</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-medical-teal mb-2">98%</div>
                <p className="text-gray-600">معدل الرضا</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-medical-green mb-2">24/7</div>
                <p className="text-gray-600">خدمة متاحة</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-medical-blue mb-2">5+</div>
                <p className="text-gray-600">سنوات خبرة</p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-6xl text-medical-blue/20 mb-4">"</div>
              <p className="text-lg text-gray-700 italic mb-4">
                خدمة ممتازة وفريق طبي محترف جداً. شعرنا بالأمان والراحة مع شركة اغابي
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">أسرة محمد أحمد</p>
                  <p className="text-sm text-gray-600">عميل راضٍ</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-medical text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift flex items-center gap-2 mx-auto"
              >
                <Heart className="w-5 h-5" />
                اختبر الفرق معنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
