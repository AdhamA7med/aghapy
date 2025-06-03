
import { Heart, Stethoscope, Cross } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "مريم جرجس",
      relation: "والدة مريض",
      text: "والله فريق شركة أغابي كان معانا في أصعب وقت. الممرضة كانت محترمة قوي ومتعاطفة. حسينا بالأمان والراحة.",
      icon: Heart,
      rating: 5
    },
    {
      name: "مينا صبحي",
      relation: "مريض سابق",
      text: "خدمة ممتازة ومتابعة دقيقة بعد العملية. الفريق الطبي مؤهل ومتفهم لاحتياجات المريض. أنصح بيهم بشدة.",
      icon: Stethoscope,
      rating: 5
    },
    {
      name: "نادية فايق",
      relation: "ابنة مسنة",
      text: "رعاية ماما كانت في إيدين أمينة. الممرضة كانت صبورة ومهتمة بأدق التفاصيل. ربنا يخليكم يا شركة أغابي.",
      icon: Cross,
      rating: 5
    },
    {
      name: "عادل سعد",
      relation: "زوج مريضة",
      text: "خدمة التمريض الليلي كانت ممتازة. قدرت أرتاح وأنا مطمن إن مراتي في رعاية كويسة قوي.",
      icon: Heart,
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-medical-green to-medical-blue rounded-full p-4 shadow-lg">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">آراء عملائنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            شهادات حقيقية من عملائنا الكرام تعكس جودة خدماتنا والثقة التي وضعوها فينا
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-white rounded-3xl p-12 text-center shadow-xl min-h-[400px] flex flex-col justify-center">
              {/* Quote Icon */}
              <div className="text-8xl text-medical-blue/20 mb-6">"</div>
              
              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                {testimonials[currentSlide].text}
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 text-medical-blue fill-current mx-1" />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center">
                  {(() => {
                    const IconComponent = testimonials[currentSlide].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-gray-800">{testimonials[currentSlide].name}</p>
                  <p className="text-gray-600">{testimonials[currentSlide].relation}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-medical-blue scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid - All Reviews */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-xl">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-medical-blue" />
                </div>
                <h4 className="font-bold text-gray-800 mb-1">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{testimonial.relation}</p>
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 text-medical-blue fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {testimonial.text.substring(0, 80)}...
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">انضم لعائلة عملائنا السعداء</h3>
            <p className="text-gray-600 mb-6">
              استمتع بخدمة تمريضية متميزة واحصل على الرعاية التي تستحقها
            </p>
            <a 
              href="https://wa.me/201211112471"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-medical-blue to-medical-teal text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              احجز استشارتك المجانية
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
