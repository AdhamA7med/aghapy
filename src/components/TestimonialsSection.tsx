
import { Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "أسرة مينا جورج",
      role: "عميل راضٍ",
      content: "والله صراحة الخدمة كانت ممتازة جداً والممرضة كانت محترفة ومتعاملة بأدب. حسينا بالأمان مع الوالد.",
      rating: 5
    },
    {
      name: "نادية سمير فهيم",
      role: "بنت مريضة",
      content: "أحسن خدمة في القاهرة والله. الممرضة جت في المعاد وكانت شاطرة ومهتمة بماما جداً. ربنا يباركلهم.",
      rating: 5
    },
    {
      name: "عائلة رامي يوسف",
      role: "عميل دائم",
      content: "من أكتر من سنة بنتعامل معاهم والخدمة ثابتة وحلوة. الأسعار معقولة والفريق محترم جداً.",
      rating: 5
    },
    {
      name: "سوزان عادل بشارة",
      role: "ابنة مريضة",
      content: "بجد كنت قلقانة على بابا بس الممرض كان ممتاز ومتابع كل حاجة. الحمد لله بابا اتحسن كتير.",
      rating: 5
    },
    {
      name: "عم جرجس عطية",
      role: "مريض سابق",
      content: "والنعمة ناس محترمين أوي والخدمة فوق الممتاز. كل اللي طلبته اتعمل بكل دقة واهتمام.",
      rating: 5
    },
    {
      name: "فادية مجدي توفيق",
      role: "زوجة مريض",
      content: "شكراً للفريق الرائع ده. جوزي كان تعبان أوي والناس دي اهتمت بيه زي أهله. ربنا يحفظهم.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="flex justify-center mb-6">
            <div className="bg-medical-blue/10 rounded-full p-4">
              <Quote className="w-12 h-12 text-medical-blue" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">آراء عملائنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            شهادات حقيقية من عائلات اختارت الثقة والجودة مع شركة اغابي
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 delay-${index * 100} ${
                isVisible ? 'scale-in visible' : 'scale-in'
              }`}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-medical-blue/10 rounded-full p-3">
                  <Quote className="w-8 h-8 text-medical-blue" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center italic">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="text-center">
                <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                <p className="text-medical-blue font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="bg-gradient-to-br from-medical-blue/5 to-medical-teal/5 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              انضم لعائلة عملائنا الراضين
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              اكتشف الفرق في الخدمة والجودة مع شركة اغابي
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-medical text-white px-10 py-4 rounded-full text-lg font-semibold hover-lift inline-flex items-center gap-3"
            >
              <Quote className="w-6 h-6" />
              ابدأ رحلتك معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
