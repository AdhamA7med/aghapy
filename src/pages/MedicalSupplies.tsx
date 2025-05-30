
import { Heart, Package, Stethoscope, Phone, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MedicalSupplies = () => {
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
        threshold: 0.1,
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

  const diaperBrands = [
    'فاين كير', 'دكتور كومفورت', 'ساني', 'فرعونكس', 'جيرماني', 
    'اوميجا', 'هاي كير', 'ابينا', 'اتيكو'
  ];

  const bedSheets = [
    'ساني', 'اوميجا', 'جيرماني', 'سليبي', 
    'دكتور كمفورت', 'هاي كير', 'دراي بلس'
  ];

  const oxygenDevices = [
    { name: 'اكسجين صيني', sizes: ['5 لتر', '8 لتر', '10 لتر'] },
    { name: 'نوفو', sizes: ['5 لتر', '8 لتر', '10 لتر'] }
  ];

  const bipapDevices = ['St30', 'St25', 'اوتو سيباب'];

  const pressureDevices = [
    'جرانزيا عادي وديجيتال', 'بيلو ديجيتال', 'يو ويل ديجيتال',
    'روز ماكس ديجيتال', 'اورثو ديجيتال', 'اكيوريت ديجيتال',
    'ميدزانيا زئبقي', 'بريما زئبقي'
  ];

  const sugarDevices = [
    'رايت تيست', 'كنتور بلاس', 'ثري اتشيك', 'تانجو', 'فاين تيست',
    'يو ويل', 'كنتور تي اس', 'بايفورما', 'برفكت', 'اكواتشيك انستنت',
    'ماتش', 'سيليكت بلاس', 'جلوكودكتور', 'وان كول بلس', 'سمارت', 'اكتيف'
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
                <Package className="w-12 h-12 text-medical-blue" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">المستلزمات الطبية</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              كل اللي ممكن تحتاجه هتلاقيه عندنا بأفضل سعر وأعلى جودة
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:01206374441"
              className="btn-medical text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              اتصل: 01206374441
            </a>
            <a 
              href="https://wa.me/201095113838"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب: 01095113838
            </a>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section ref={sectionRef} className="py-16">
        <div className="container mx-auto">
          
          {/* Section 1: Diapers and Bed Sheets */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">حفاضات كبار السن ومفارش السرير</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Diapers */}
              <div className="medical-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-medical-blue mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  أنواع الحفاضات
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {diaperBrands.map((brand, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-all">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <Package className="w-8 h-8 text-medical-blue" />
                      </div>
                      <p className="text-sm font-medium text-gray-800">{brand}</p>
                      <p className="text-xs text-gray-500">جميع المقاسات</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bed Sheets */}
              <div className="medical-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-medical-teal mb-4 flex items-center gap-2">
                  <Stethoscope className="w-6 h-6" />
                  أنواع المفارش
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {bedSheets.map((sheet, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-all">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <Package className="w-8 h-8 text-medical-teal" />
                      </div>
                      <p className="text-sm font-medium text-gray-800">{sheet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Medical Equipment Rental */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">إيجار المعدات الطبية</h2>
              <p className="text-gray-600">كراسي ومشايات وعكاكيز وسراير طبية</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {['كراسي متحركة', 'مشايات طبية', 'عكاكيز طبية', 'سراير طبية'].map((item, index) => (
                <div key={index} className="medical-card rounded-xl p-6 text-center hover-lift">
                  <div className="w-20 h-20 bg-medical-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-10 h-10 text-medical-green" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{item}</h4>
                  <p className="text-sm text-gray-600">متاح للإيجار</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Medical Devices */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">الأجهزة الطبية</h2>
              <p className="text-gray-600">إيجار أجهزة الأكسجين وجميع مستلزمات العيادات والمستشفيات</p>
            </div>
            
            <div className="space-y-8">
              {/* Oxygen Devices */}
              <div className="medical-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-medical-blue mb-4">أجهزة الأكسجين</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {oxygenDevices.map((device, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">{device.name}</h4>
                      <div className="flex gap-2 flex-wrap">
                        {device.sizes.map((size, sizeIndex) => (
                          <span key={sizeIndex} className="bg-medical-blue/10 text-medical-blue px-3 py-1 rounded-full text-sm">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BiPAP Devices */}
              <div className="medical-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-medical-teal mb-4">أجهزة بيباب</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {bipapDevices.map((device, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center">
                      <div className="w-16 h-16 bg-medical-teal/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <Stethoscope className="w-8 h-8 text-medical-teal" />
                      </div>
                      <p className="font-medium text-gray-800">{device}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pressure Devices */}
              <div className="medical-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-medical-green mb-4">أجهزة الضغط</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {pressureDevices.map((device, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-center">
                      <div className="w-12 h-12 bg-medical-green/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-medical-green" />
                      </div>
                      <p className="text-sm font-medium text-gray-800">{device}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sugar Devices */}
              <div className="medical-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-medical-blue mb-4">أجهزة السكر والشرائط</h3>
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {sugarDevices.map((device, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-center">
                      <div className="w-12 h-12 bg-medical-blue/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <Package className="w-6 h-6 text-medical-blue" />
                      </div>
                      <p className="text-sm font-medium text-gray-800">{device}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="medical-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">للاستفسار والطلب</h3>
              <p className="text-gray-600 mb-6">تواصل معنا الآن للحصول على أفضل الأسعار والخدمات</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:01206374441"
                  className="btn-medical text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  اتصل: 01206374441
                </a>
                <a 
                  href="https://wa.me/201095113838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب: 01095113838
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalSupplies;
