
import { Phone, MessageCircle, Heart, Stethoscope, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingPhoneButton from '@/components/FloatingPhoneButton';

const MedicalSupplies = () => {
  const diaperBrands = [
    { name: 'فاين كير', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80' },
    { name: 'دكتور كومفورت', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80' },
    { name: 'ساني', image: 'https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?auto=format&fit=crop&w=600&q=80' },
    { name: 'فرعونكس', image: 'https://images.unsplash.com/photo-1607027491717-7c19a81bdf19?auto=format&fit=crop&w=600&q=80' },
    { name: 'جيرماني', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80' },
    { name: 'اوميجا', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
    { name: 'هاي كير', image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80' },
    { name: 'ابينا', image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80' },
    { name: 'اتيكو', image: 'https://images.unsplash.com/photo-1574480559845-54b7e5db2b61?auto=format&fit=crop&w=600&q=80' }
  ];

  const bedSheets = [
    { name: 'ساني', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80' },
    { name: 'اوميجا', image: 'https://images.unsplash.com/photo-1631879742974-20dceb92f16e?auto=format&fit=crop&w=600&q=80' },
    { name: 'جيرماني', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80' },
    { name: 'سليبي', image: 'https://images.unsplash.com/photo-1596178060671-7a80dc4d6d0d?auto=format&fit=crop&w=600&q=80' },
    { name: 'دكتور كمفورت', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80' },
    { name: 'هاي كير', image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80' },
    { name: 'دراي بلس', image: 'https://images.unsplash.com/photo-1574480559845-54b7e5db2b61?auto=format&fit=crop&w=600&q=80' }
  ];

  const oxygenDevices = [
    { name: 'اكسجين صيني', sizes: ['5 لتر', '8 لتر', '10 لتر'], image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80' },
    { name: 'نوفو', sizes: ['5 لتر', '8 لتر', '10 لتر'], image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' }
  ];

  const bipapDevices = [
    { name: 'St30', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80' },
    { name: 'St25', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80' },
    { name: 'اوتو سيباب', image: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=600&q=80' }
  ];

  const pressureDevices = [
    { name: 'جرانزيا عادي وديجيتال', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
    { name: 'بيلو ديجيتال', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
    { name: 'يو ويل ديجيتال', image: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=600&q=80' },
    { name: 'روز ماكس ديجيتال', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80' },
    { name: 'اورثو ديجيتال', image: 'https://images.unsplash.com/photo-1582719371630-6e9a3fccf5e3?auto=format&fit=crop&w=600&q=80' },
    { name: 'اكيوريت ديجيتال', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80' },
    { name: 'ميدزانيا زئبقي', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80' },
    { name: 'بريما زئبقي', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80' }
  ];

  const sugarDevices = [
    { name: 'رايت تيست', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
    { name: 'كنتور بلاس', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
    { name: 'ثري اتشيك', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80' },
    { name: 'تانجو', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80' },
    { name: 'فاين تيست', image: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=600&q=80' },
    { name: 'يو ويل', image: 'https://images.unsplash.com/photo-1582719371630-6e9a3fccf5e3?auto=format&fit=crop&w=600&q=80' },
    { name: 'كنتور تي اس', image: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=600&q=80' },
    { name: 'بايفورما', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80' },
    { name: 'برفكت', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80' },
    { name: 'اكواتشيك انستنت', image: 'https://images.unsplash.com/photo-1591123120675-6f7a16c5d883?auto=format&fit=crop&w=600&q=80' },
    { name: 'ماتش', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
    { name: 'سيليكت بلس', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
    { name: 'جلوكودكتور', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80' },
    { name: 'وان كول بلس', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80' },
    { name: 'سمارت', image: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=600&q=80' },
    { name: 'اكتيف', image: 'https://images.unsplash.com/photo-1582719371630-6e9a3fccf5e3?auto=format&fit=crop&w=600&q=80' }
  ];

  const rentalEquipment = [
    { name: 'كراسي متحركة', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=600&q=80' },
    { name: 'مشايات طبية', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80' },
    { name: 'عكاكيز طبية', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
    { name: 'سراير طبية', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
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
              className="bg-medical-blue hover:bg-medical-blue/90 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Section 1: Diapers and Bed Sheets */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">حفاضات كبار السن ومفارش السرير</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Diapers */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-medical-blue mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  أنواع الحفاضات
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {diaperBrands.map((brand, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all hover:transform hover:scale-105">
                      <div className="w-56 h-56 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
                        <img 
                          src={brand.image} 
                          alt={brand.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-lg font-medium text-gray-800">{brand.name}</p>
                      <p className="text-sm text-gray-500">جميع المقاسات</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bed Sheets */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-medical-teal mb-4 flex items-center gap-2">
                  <Stethoscope className="w-6 h-6" />
                  أنواع المفارش
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {bedSheets.map((sheet, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all hover:transform hover:scale-105">
                      <div className="w-56 h-56 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
                        <img 
                          src={sheet.image} 
                          alt={sheet.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-lg font-medium text-gray-800">{sheet.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Medical Equipment Rental */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">إيجار المعدات الطبية</h2>
              <p className="text-gray-600">كراسي ومشايات وعكاكيز وسراير طبية</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rentalEquipment.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all shadow-md hover:transform hover:scale-105">
                  <div className="w-56 h-56 bg-gray-50 rounded-lg mx-auto mb-4 overflow-hidden border-2 border-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-600">متاح للإيجار</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Medical Devices */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">الأجهزة الطبية</h2>
              <p className="text-gray-600">إيجار أجهزة الأكسجين وجميع مستلزمات العيادات والمستشفيات</p>
            </div>
            
            <div className="space-y-8">
              {/* Oxygen Devices */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-medical-blue mb-4">أجهزة الأكسجين</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {oxygenDevices.map((device, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:transform hover:scale-105">
                      <div className="flex items-center gap-6 mb-4">
                        <div className="w-40 h-40 bg-white rounded-lg overflow-hidden border-2 border-gray-200">
                          <img 
                            src={device.image} 
                            alt={device.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2 text-lg">{device.name}</h4>
                          <div className="flex gap-2 flex-wrap">
                            {device.sizes.map((size, sizeIndex) => (
                              <span key={sizeIndex} className="bg-medical-blue/10 text-medical-blue px-3 py-1 rounded-full text-sm">
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BiPAP Devices */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-medical-teal mb-4">أجهزة بيباب</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {bipapDevices.map((device, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all hover:transform hover:scale-105">
                      <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
                        <img 
                          src={device.image} 
                          alt={device.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-medium text-gray-800 text-lg">{device.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pressure Devices */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-medical-green mb-4">أجهزة الضغط</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pressureDevices.map((device, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all hover:transform hover:scale-105">
                      <div className="w-40 h-40 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
                        <img 
                          src={device.image} 
                          alt={device.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-800">{device.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sugar Devices */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-medical-blue mb-4">أجهزة السكر والشرائط</h3>
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sugarDevices.map((device, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all hover:transform hover:scale-105">
                      <div className="w-40 h-40 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
                        <img 
                          src={device.image} 
                          alt={device.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-800">{device.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">للاستفسار والطلب</h3>
              <p className="text-gray-600 mb-6">تواصل معنا الآن للحصول على أفضل الأسعار والخدمات</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:01206374441"
                  className="bg-medical-blue hover:bg-medical-blue/90 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
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
      <WhatsAppFloat />
      <FloatingPhoneButton />
    </div>
  );
};

export default MedicalSupplies;
