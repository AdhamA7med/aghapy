
import { Heart, Stethoscope, Cross, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-medical-blue/5 to-medical-teal/5"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-white rounded-full p-3 sm:p-4 shadow-lg">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-medical-blue" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">تواصل معنا</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            نحن متاحون 24/7 لخدمتكم وتقديم أفضل رعاية طبية منزلية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 sm:space-y-8">
              {/* Main Contact Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">اتصل بنا الآن</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    فريقنا الطبي متاح دائماً للإجابة على استفساراتكم وتقديم المساعدة
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Phone */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-medical-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-medical-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">هاتف / واتساب</p>
                      <a 
                        href="tel:01211112471"
                        className="text-lg sm:text-xl lg:text-2xl font-bold text-medical-blue hover:text-medical-teal transition-colors block"
                      >
                        01211112471
                      </a>
                    </div>
                    <a 
                      href="tel:01211112471"
                      className="w-full sm:w-auto bg-medical-blue text-white hover:bg-medical-teal transition-colors px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base flex items-center justify-center gap-2"
                    >
                      اتصل
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">واتساب</p>
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">01211112471</p>
                    </div>
                    <a 
                      href="https://wa.me/201211112471"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-600 transition-colors px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base flex items-center justify-center gap-2"
                    >
                      محادثة
                    </a>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-medical-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-medical-teal" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">العنوان</p>
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-medical-teal">القاهرة، مصر</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-center shadow-lg border border-blue-100">
                <div className="flex justify-center mb-4">
                  <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-medical-blue" />
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3">متاحون 24/7</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  نحن نعمل على مدار الساعة لضمان حصولكم على أفضل رعاية طبية في أي وقت
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <div className="space-y-6 sm:space-y-8">
              {/* Google Map */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-blue-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
                  <MapPin className="w-6 h-6 text-medical-blue" />
                  موقعنا على الخريطة
                </h3>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.8116098002106!2d31.3437892!3d30.099581299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815b22e4a7bd1%3A0xc6f8f212f4f2784f!2z2LTYsdmK2Kkg2K7Yr9mF2KfYqiDYqtmF2LHZiti22YrYqSDZgdmKINin2YTZgtin2YfYsdipIHwg2LTYsdmK2Kkg2KfYudin2KjZiiDZhNmE2YXYs9iq2YTYstmF2KfYqiDYp9mE2LfYqNmK2Kkg2YjYp9mE2LHYudin2YrYqSDYp9mE2KrZhdix2YrYttmK2Yc!5e0!3m2!1sar!2seg!4v1748572358611!5m2!1sar!2seg" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                  ></iframe>
                </div>
              </div>

              {/* Quick Services */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-blue-100">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">خدمات سريعة</h4>
                <div className="space-y-3 sm:space-y-4">
                  <button 
                    onClick={() => window.open('https://wa.me/201211112471?text=أريد استشارة مجانية', '_blank')}
                    className="w-full bg-medical-blue/10 hover:bg-medical-blue/20 text-medical-blue font-semibold px-4 py-3 sm:px-6 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
للحجز والاستفسار
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://wa.me/201211112471?text=أريد حجز موعد', '_blank')}
                    className="w-full bg-medical-teal/10 hover:bg-medical-teal/20 text-medical-teal font-semibold px-4 py-3 sm:px-6 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
                    حجز موعد
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://wa.me/201211112471?text=أريد معلومات عن الأسعار', '_blank')}
                    className="w-full bg-medical-green/10 hover:bg-medical-green/20 text-medical-green font-semibold px-4 py-3 sm:px-6 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Cross className="w-4 h-4 sm:w-5 sm:h-5" />
                    استعلام عن الأسعار
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg border border-blue-100">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-medical-blue mb-1 sm:mb-2">500+</div>
                  <p className="text-xs sm:text-sm text-gray-600">عميل سعيد</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg border border-blue-100">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-medical-teal mb-1 sm:mb-2">10+</div>
                  <p className="text-xs sm:text-sm text-gray-600">سنوات خبرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
