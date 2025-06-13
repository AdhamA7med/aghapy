import fineCareImg from '@/assets/فاين كير.jpg';
import doctorComfortImg from '@/assets/دكتور كومفورت.webp';
import saniImg from '@/assets/ساني.png';
import pharaonicsImg from '@/assets/فرعونكس.jfif';
import germanyImg from '@/assets/جيرماني.jpg';
import omegaImg from '@/assets/اوميجا.jpg';
import highCareImg from '@/assets/هاي كير.jpg';
import abenaImg from '@/assets/ابينا.jfif';
import atecoImg from '@/assets/ااتيكو.jpg';

import saniBedSheetImg from '@/assets/مفارش ساني.jfif';
import omegaBedSheetImg from '@/assets/مفارش اوميجا.jpg';
import germanyBedSheetImg from '@/assets/مفارش جيرماني.jpg';
import sleepyBedSheetImg from '@/assets/سليبي مفارش.jfif';
import doctorComfortBedSheetImg from '@/assets/كومفورت مفارش.jpg';
import highCareBedSheetImg from '@/assets/مفارش هاي كير.jfif';
import dryPlusBedSheetImg from '@/assets/مفارش دراي بلس.jfif';

// Rental Equipment
import wheelchairsImg from '@/assets/كرسي-متحرك-استاندر-عجل-صغير-مجهز-حمام-حركة-دخل-المنزل.jpg';
import medicalWalkersImg from '@/assets/مشايات طبية.jpg';
import medicalCrutchesImg from '@/assets/عكاكيز طبية.webp';
import medicalBedsImg from '@/assets/سرير كهرباي.png';

// Orthopedic Supplies
import medicalFlangesImg from '@/assets/جميع انواع ومقاسات الفلانشات الطبية.jfif';
import toiletSupportImg from '@/assets/علايه تواليت بجوانب.png';
import neckSupportImg from '@/assets/رقبة طبية.jfif';
import kneeSupportsImg from '@/assets/جميع انواع الركب.jpg';
import varicoseStockingsImg from '@/assets/جميع انواع شرابات الدوالي.jfif';
import siliconeHeelImg from '@/assets/كعب سيلكون.jpg';
import siliconeMattressImg from '@/assets/فرش سيليكون.jpeg';
import backBeltImg from '@/assets/جميع احزمة البطن والظهر.jpg';


// Comfort Supplies
import waterBagsImg from '@/assets/قربة مياه.png';
import massageDeviceImg from '@/assets/جهاز مساج.webp';
import weightScaleImg from '@/assets/ميزان اوزان.jpg';
import airMattressGranziaImg from '@/assets/مرتبة هوائية كور جرانزيا.webp';
import airMattressStripsImg from '@/assets/مرتبة هوائية شرايح.png';
import medicalPillowsImg from '@/assets/مخدات طبية.jpg';

// Respiratory Supplies
import nebulizerImg from '@/assets/جميع انواع اجهزة النيبولايزر للأطفال والكبار.png';
import suctionDevicesImg from '@/assets/انواع متعددة من اجهزة الشفط.webp';
import masksImg from '@/assets/ماسكات.jpg';

// Protective Supplies
import glovesImg from '@/assets/انواع متعددة من الجوانتيات.avif';

// Oxygen Devices
import chineseOxygenImg from '@/assets/صيني.webp';
import novoImg from '@/assets/نوفو.webp';

// BiPAP Devices
import st30Img from '@/assets/St30+منتج+رعاية+الجهاز+التنفسي+بيباب+من+جهاز+التنفس+الصناعي+لمرض+انقطاع+النفس+أثناء+النوم+ومرض+الانسداد+الرئوي+المزمن.avif';
import st25Img from '@/assets/St25.avif';
import autoCpapImg from '@/assets/اوتو سيباب.avif';

// Pressure Devices
import granziaImg from '@/assets/جرانزيا عادي وديجيتال.jpeg';
import beurerDigitalImg from '@/assets/بيلو ديجيتال.webp';
import uwellDigitalImg from '@/assets/يو ويل ديجيتال.jpg';
import rossmaxDigitalImg from '@/assets/روز ماكس ديجيتال.jpg';
import orthoDigitalImg from '@/assets/اورثو.jfif';
import accurateDigitalImg from '@/assets/اكيوريت ديجيتال.jpg';
import medzaniaMercuryImg from '@/assets/جهاز-ضغط-ميديزانا-3.jpg';
import primaMercuryImg from '@/assets/بريما زئبقي.webp';

// Sugar Devices
import rightTestImg from '@/assets/رايت تيست.jpg';
import contourPlusImg from '@/assets/كنتور بلاس.jpg';
// import threeHCheckImg from '@/assets/ثري اتشيك.webp';
import tangoImg from '@/assets/تانجو.jpeg';
import fineTestImg from '@/assets/فاين تيست.jpg';
import uwellImg from '@/assets/يو ويل.webp';
import contourTsImg from '@/assets/كنتور تي اس.jpg';
import bayerFormaImg from '@/assets/بايفورما.avif';
import perfectImg from '@/assets/برفكت.jfif';
import accuChekInstantImg from '@/assets/اكواتشيك انستنت.jpg';
import matchImg from '@/assets/ماتش.jpg';
import selectPlusImg from '@/assets/سيليكت بلس.webp';
import glucoDoctorImg from '@/assets/جلوكودكتور.webp';
import oneCoolPlusImg from '@/assets/جهاز-سكر-أون-كول-بلاس-On-Call-Plus.webp';
import smartImg from '@/assets/سمارت.jfif';
import activeImg from '@/assets/ثري اتشيك.webp';


import { Phone, MessageCircle, Heart, Stethoscope, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingPhoneButton from '@/components/FloatingPhoneButton';
import { useEffect } from 'react';

const MedicalSupplies = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const diaperBrands = [
    { name: 'فاين كير', image: fineCareImg },
    { name: 'دكتور كومفورت', image: doctorComfortImg
 },
    { name: 'ساني', image: saniImg },
    { name: 'فرعونكس', image: pharaonicsImg },
    { name: 'جيرماني', image: germanyImg },
    { name: 'اوميجا', image: omegaImg },
    { name: 'هاي كير', image: highCareImg },
    { name: 'ابينا', image: abenaImg },
    { name: 'اتيكو', image: atecoImg }
  ];

  const bedSheets = [
    { name: 'ساني', image: saniBedSheetImg },
    { name: 'اوميجا', image: omegaBedSheetImg },
    { name: 'جيرماني', image: germanyBedSheetImg },
    { name: 'سليبي', image: sleepyBedSheetImg },
    { name: 'دكتور كمفورت', image: doctorComfortBedSheetImg },
    { name: 'هاي كير', image: highCareBedSheetImg },
    { name: 'دراي بلس', image: dryPlusBedSheetImg },
   
  ];

  const oxygenDevices = [
    { name: 'اكسجين صيني', sizes: ['5 لتر', '8 لتر', '10 لتر'], image: chineseOxygenImg },
    { name: 'نوفو', sizes: ['5 لتر', '8 لتر', '10 لتر'], image: novoImg }
  ];

  const bipapDevices = [
    { name: 'St30', image: st30Img },
    { name: 'St25', image: st25Img },
    { name: 'اوتو سيباب', image: autoCpapImg }
  ];

  const pressureDevices = [
    { name: 'جرانزيا عادي وديجيتال', image: granziaImg },
    { name: 'بيلو ديجيتال', image: beurerDigitalImg },
    { name: 'يو ويل ديجيتال', image: uwellDigitalImg },
    { name: 'روز ماكس ديجيتال', image: rossmaxDigitalImg },
    { name: 'اورثو ديجيتال', image: orthoDigitalImg },
    { name: 'اكيوريت ديجيتال', image: accurateDigitalImg },
    { name: 'ميدزانيا زئبقي', image: medzaniaMercuryImg },
    { name: 'بريما زئبقي', image: primaMercuryImg }
    
  ];

  const sugarDevices = [
    { name: 'رايت تيست', image: rightTestImg },
    { name: 'كنتور بلاس', image: contourPlusImg },
    // { name: 'ثري اتشيك', image: threeHCheckImg },
    { name: 'تانجو', image: tangoImg },
    { name: 'فاين تيست', image: fineTestImg },
    { name: 'يو ويل', image: uwellImg },
    { name: 'كنتور تي اس', image: contourTsImg },
    { name: 'بايفورما', image: bayerFormaImg },
    { name: 'برفكت', image: perfectImg },
    { name: 'اكواتشيك انستنت', image: accuChekInstantImg },
    { name: 'ماتش', image: matchImg },
    { name: 'سيليكت بلس', image: selectPlusImg },
    { name: 'جلوكودكتور', image: glucoDoctorImg },
    { name: 'جهاز سكر اون كول بلاس', image: oneCoolPlusImg },
    { name: 'سمارت', image: smartImg },
    { name: 'اكتيف', image: activeImg }
  ];

  const rentalEquipment = [

    { name: 'كراسي متحركة', image: wheelchairsImg },
    { name: 'مشايات طبية', image: medicalWalkersImg },
    { name: 'عكاكيز طبية', image: medicalCrutchesImg },
    { name: 'سراير طبية', image: medicalBedsImg },
   
  ];

  // New medical supplies categories
  const orthopedicSupplies = [
    { name: 'جميع انواع ومقاسات الفلانشات الطبية', image: medicalFlangesImg},
    { name: 'علايه تواليت بجوانب', image: toiletSupportImg },
    { name: 'رقبة طبية', image: neckSupportImg },
    { name: 'جميع انواع الركب', image: kneeSupportsImg },
    { name: 'جميع انواع شرابات الدوالي', image: varicoseStockingsImg },
    { name: 'كعب سيلكون', image: siliconeHeelImg },
    { name: 'فرش سيليكون', image: siliconeMattressImg },
    { name: 'جميع احزمة البطن والظهر', image: backBeltImg }
  ];

  const comfortSupplies = [
    { name: 'جميع انواع قربة المياه', image: waterBagsImg },
    { name: 'جهاز مساج', image: massageDeviceImg},
    { name: 'ميزان اوزان', image: weightScaleImg },
    { name: 'مرتبة هوائية كور جرانزيا', image: airMattressGranziaImg },
    { name: 'مرتبة هوائية شرايح', image: airMattressStripsImg },
    { name: 'انواع متعددة من المخدات الطبية', image: medicalPillowsImg }
  ];

  const respiratorySupplies = [
    { name: 'جميع انواع اجهزة النيبولايزر للأطفال والكبار', image: nebulizerImg },
    { name: 'انواع متعددة من اجهزة الشفط', image: suctionDevicesImg  },
    { name: 'ماسكات', image: masksImg }
  ];

  const protectiveSupplies = [
    { name: 'انواع متعددة من الجوانتيات', image: glovesImg }
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
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-medical-blue mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  أنواع الحفاضات
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {diaperBrands.map((brand, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
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
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-medical-teal mb-4 flex items-center gap-2">
                  <Stethoscope className="w-6 h-6" />
                  أنواع المفارش
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {bedSheets.map((sheet, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
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
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 shadow-md hover:transform hover:scale-105">
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

          {/* Section 3: Orthopedic Supplies */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">المستلزمات الطبية والأورثوبيدية</h2>
              <p className="text-gray-600">جميع المستلزمات الطبية والأورثوبيدية المتخصصة</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-medical-blue mb-4">المستلزمات الأورثوبيدية والعلاجية</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {orthopedicSupplies.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-40 h-40 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-800">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Comfort and Therapeutic Supplies */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-medical-teal mb-4">مستلزمات الراحة والعلاج</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {comfortSupplies.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-lg font-medium text-gray-800">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 5: Respiratory Supplies */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-medical-green mb-4">مستلزمات الجهاز التنفسي</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {respiratorySupplies.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-lg font-medium text-gray-800">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 6: Protective Supplies */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-medical-blue mb-4">مستلزمات الحماية</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {protectiveSupplies.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-lg font-medium text-gray-800">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 7: Medical Devices */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">الأجهزة الطبية</h2>
              <p className="text-gray-600">إيجار أجهزة الأكسجين وجميع مستلزمات العيادات والمستشفيات</p>
            </div>
            
            <div className="space-y-8">
              {/* Oxygen Devices */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-medical-blue mb-4">أجهزة الأكسجين</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {oxygenDevices.map((device, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
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
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-medical-teal mb-4">أجهزة بيباب</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {bipapDevices.map((device, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
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
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-medical-green mb-4">أجهزة الضغط</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pressureDevices.map((device, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
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
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-medical-blue mb-4">أجهزة السكر والشرائط</h3>
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sugarDevices.map((device, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg">
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











// import { Phone, MessageCircle, Heart, Stethoscope, Package } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import WhatsAppFloat from '@/components/WhatsAppFloat';
// import FloatingPhoneButton from '@/components/FloatingPhoneButton';
// import { useEffect } from 'react';

// const MedicalSupplies = () => {
//   // Scroll to top when component mounts
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const diaperBrands = [
//     { name: 'فاين كير', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=600&q=80' },
//     { name: 'دكتور كومفورت', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
//     { name: 'ساني', image: 'https://images.unsplash.com/photo-1631879742974-20dceb92f16e?auto=format&fit=crop&w=600&q=80' },
//     { name: 'فرعونكس', image: 'https://images.unsplash.com/photo-1607027491717-7c19a81bdf19?auto=format&fit=crop&w=600&q=80' },
//     { name: 'جيرماني', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80' },
//     { name: 'اوميجا', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
//     { name: 'هاي كير', image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80' },
//     { name: 'ابينا', image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80' },
//     { name: 'اتيكو', image: 'https://images.unsplash.com/photo-1574480559845-54b7e5db2b61?auto=format&fit=crop&w=600&q=80' }
//   ];

//   const bedSheets = [
//     { name: 'ساني', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80' },
//     { name: 'اوميجا', image: 'https://images.unsplash.com/photo-1631879742974-20dceb92f16e?auto=format&fit=crop&w=600&q=80' },
//     { name: 'جيرماني', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80' },
//     { name: 'سليبي', image: 'https://images.unsplash.com/photo-1596178060671-7a80dc4d6d0d?auto=format&fit=crop&w=600&q=80' },
//     { name: 'دكتور كمفورت', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80' },
//     { name: 'هاي كير', image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80' },
//     { name: 'دراي بلس', image: 'https://images.unsplash.com/photo-1574480559845-54b7e5db2b61?auto=format&fit=crop&w=600&q=80' }
//   ];

//   const oxygenDevices = [
//     { name: 'اكسجين صيني', sizes: ['5 لتر', '8 لتر', '10 لتر'], image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80' },
//     { name: 'نوفو', sizes: ['5 لتر', '8 لتر', '10 لتر'], image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' }
//   ];

//   const bipapDevices = [
//     { name: 'St30', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80' },
//     { name: 'St25', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80' },
//     { name: 'اوتو سيباب', image: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=600&q=80' }
//   ];

//   const pressureDevices = [
//     { name: 'جرانزيا عادي وديجيتال', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
//     { name: 'بيلو ديجيتال', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
//     { name: 'يو ويل ديجيتال', image: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=600&q=80' },
//     { name: 'روز ماكس ديجيتال', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80' },
//     { name: 'اورثو ديجيتال', image: 'https://images.unsplash.com/photo-1582719371630-6e9a3fccf5e3?auto=format&fit=crop&w=600&q=80' },
//     { name: 'اكيوريت ديجيتال', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80' },
//     { name: 'ميدزانيا زئبقي', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80' },
//     { name: 'بريما زئبقي', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80' }
//   ];

//   const sugarDevices = [
//     { name: 'رايت تيست', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
//     { name: 'كنتور بلاس', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
//     { name: 'ثري اتشيك', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80' },
//     { name: 'تانجو', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80' },
//     { name: 'فاين تيست', image: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=600&q=80' },
//     { name: 'يو ويل', image: 'https://images.unsplash.com/photo-1582719371630-6e9a3fccf5e3?auto=format&fit=crop&w=600&q=80' },
//     { name: 'كنتور تي اس', image: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=600&q=80' },
//     { name: 'بايفورما', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80' },
//     { name: 'برفكت', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80' },
//     { name: 'اكواتشيك انستنت', image: 'https://images.unsplash.com/photo-1591123120675-6f7a16c5d883?auto=format&fit=crop&w=600&q=80' },
//     { name: 'ماتش', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
//     { name: 'سيليكت بلس', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
//     { name: 'جلوكودكتور', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80' },
//     { name: 'وان كول بلس', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80' },
//     { name: 'سمارت', image: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=600&q=80' },
//     { name: 'اكتيف', image: 'https://images.unsplash.com/photo-1582719371630-6e9a3fccf5e3?auto=format&fit=crop&w=600&q=80' }
//   ];

//   const rentalEquipment = [
//     { name: 'كراسي متحركة', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=600&q=80' },
//     { name: 'مشايات طبية', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80' },
//     { name: 'عكاكيز طبية', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
//     { name: 'سراير طبية', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80' }
//   ];

//   // New medical supplies categories
//   const orthopedicSupplies = [
//     { name: 'جميع انواع ومقاسات الفلانشات الطبية', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80' },
//     { name: 'علايه تواليت بجوانب', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
//     { name: 'رقبة طبية', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80' },
//     { name: 'جميع انواع الركب', image: 'https://images.unsplash.com/photo-1582719371630-6e9a3fccf5e3?auto=format&fit=crop&w=600&q=80' },
//     { name: 'جميع انواع شرابات الدوالي', image: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=600&q=80' },
//     { name: 'كعب سيلكون', image: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=600&q=80' },
//     { name: 'فرش سيليكون', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80' },
//     { name: 'جميع احزمة البطن والظهر', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80' }
//   ];

//   const comfortSupplies = [
//     { name: 'جميع انواع قربة المياه', image: 'https://images.unsplash.com/photo-1591123120675-6f7a16c5d883?auto=format&fit=crop&w=600&q=80' },
//     { name: 'جهاز مساج', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
//     { name: 'ميزان اوزان', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80' },
//     { name: 'مرتبة هوائية كور جرانزيا', image: 'https://images.unsplash.com/photo-1631879742974-20dceb92f16e?auto=format&fit=crop&w=600&q=80' },
//     { name: 'مرتبة هوائية شرايح', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80' },
//     { name: 'انواع متعددة من المخدات الطبية', image: 'https://images.unsplash.com/photo-1596178060671-7a80dc4d6d0d?auto=format&fit=crop&w=600&q=80' }
//   ];

//   const respiratorySupplies = [
//     { name: 'جميع انواع اجهزة النيبولايزر للأطفال والكبار', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80' },
//     { name: 'انواع متعددة من اجهزة الشفط', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80' },
//     { name: 'ماسكات', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80' }
//   ];

//   const protectiveSupplies = [
//     { name: 'انواع متعددة من الجوانتيات', image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80' }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
      
//       {/* Hero Section */}
//       <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-teal-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-6">
//               <div className="bg-white rounded-full p-4 shadow-lg">
//                 <Package className="w-12 h-12 text-medical-blue" />
//               </div>
//             </div>
//             <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">المستلزمات الطبية</h1>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               كل اللي ممكن تحتاجه هتلاقيه عندنا بأفضل سعر وأعلى جودة
//             </p>
//           </div>
          
//           {/* Contact Info */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//             <a 
//               href="tel:01206374441"
//               className="bg-medical-blue hover:bg-medical-blue/90 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
//             >
//               <Phone className="w-5 h-5" />
//               اتصل: 01206374441
//             </a>
//             <a 
//               href="https://wa.me/201095113838"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
//             >
//               <MessageCircle className="w-5 h-5" />
//               واتساب: 01095113838
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
          
//           {/* Section 1: Diapers and Bed Sheets */}
//           <div className="mb-16">
//             <div className="text-center mb-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">حفاضات كبار السن ومفارش السرير</h2>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Diapers */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h3 className="text-xl font-bold text-medical-blue mb-4 flex items-center gap-2">
//                   <Heart className="w-6 h-6" />
//                   أنواع الحفاضات
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {diaperBrands.map((brand, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
//                       <div className="w-56 h-56 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
//                         <img 
//                           src={brand.image} 
//                           alt={brand.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <p className="text-lg font-medium text-gray-800">{brand.name}</p>
//                       <p className="text-sm text-gray-500">جميع المقاسات</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Bed Sheets */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h3 className="text-xl font-bold text-medical-teal mb-4 flex items-center gap-2">
//                   <Stethoscope className="w-6 h-6" />
//                   أنواع المفارش
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {bedSheets.map((sheet, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
//                       <div className="w-56 h-56 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
//                         <img 
//                           src={sheet.image} 
//                           alt={sheet.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <p className="text-lg font-medium text-gray-800">{sheet.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Section 2: Medical Equipment Rental */}
//           <div className="mb-16">
//             <div className="text-center mb-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">إيجار المعدات الطبية</h2>
//               <p className="text-gray-600">كراسي ومشايات وعكاكيز وسراير طبية</p>
//             </div>
            
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {rentalEquipment.map((item, index) => (
//                 <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 shadow-md hover:transform hover:scale-105">
//                   <div className="w-56 h-56 bg-gray-50 rounded-lg mx-auto mb-4 overflow-hidden border-2 border-gray-200">
//                     <img 
//                       src={item.image} 
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <h4 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h4>
//                   <p className="text-sm text-gray-600">متاح للإيجار</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Section 3: Orthopedic Supplies */}
//           <div className="mb-16">
//             <div className="text-center mb-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">المستلزمات الطبية والأورثوبيدية</h2>
//               <p className="text-gray-600">جميع المستلزمات الطبية والأورثوبيدية المتخصصة</p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h3 className="text-xl font-bold text-medical-blue mb-4">المستلزمات الأورثوبيدية والعلاجية</h3>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {orthopedicSupplies.map((item, index) => (
//                   <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
//                     <div className="w-40 h-40 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
//                       <img 
//                         src={item.image} 
//                         alt={item.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <p className="text-sm font-medium text-gray-800">{item.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Section 4: Comfort and Therapeutic Supplies */}
//           <div className="mb-16">
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h3 className="text-xl font-bold text-medical-teal mb-4">مستلزمات الراحة والعلاج</h3>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {comfortSupplies.map((item, index) => (
//                   <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
//                     <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
//                       <img 
//                         src={item.image} 
//                         alt={item.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <p className="text-lg font-medium text-gray-800">{item.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Section 5: Respiratory Supplies */}
//           <div className="mb-16">
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h3 className="text-xl font-bold text-medical-green mb-4">مستلزمات الجهاز التنفسي</h3>
//               <div className="grid sm:grid-cols-3 gap-6">
//                 {respiratorySupplies.map((item, index) => (
//                   <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
//                     <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
//                       <img 
//                         src={item.image} 
//                         alt={item.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <p className="text-lg font-medium text-gray-800">{item.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Section 6: Protective Supplies */}
//           <div className="mb-16">
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h3 className="text-xl font-bold text-medical-blue mb-4">مستلزمات الحماية</h3>
//               <div className="grid sm:grid-cols-2 gap-6">
//                 {protectiveSupplies.map((item, index) => (
//                   <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
//                     <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
//                       <img 
//                         src={item.image} 
//                         alt={item.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <p className="text-lg font-medium text-gray-800">{item.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Section 7: Medical Devices */}
//           <div>
//             <div className="text-center mb-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">الأجهزة الطبية</h2>
//               <p className="text-gray-600">إيجار أجهزة الأكسجين وجميع مستلزمات العيادات والمستشفيات</p>
//             </div>
            
//             <div className="space-y-8">
//               {/* Oxygen Devices */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h3 className="text-xl font-bold text-medical-blue mb-4">أجهزة الأكسجين</h3>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {oxygenDevices.map((device, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
//                       <div className="flex items-center gap-6 mb-4">
//                         <div className="w-40 h-40 bg-white rounded-lg overflow-hidden border-2 border-gray-200">
//                           <img 
//                             src={device.image} 
//                             alt={device.name}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-gray-800 mb-2 text-lg">{device.name}</h4>
//                           <div className="flex gap-2 flex-wrap">
//                             {device.sizes.map((size, sizeIndex) => (
//                               <span key={sizeIndex} className="bg-medical-blue/10 text-medical-blue px-3 py-1 rounded-full text-sm">
//                                 {size}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* BiPAP Devices */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h3 className="text-xl font-bold text-medical-teal mb-4">أجهزة بيباب</h3>
//                 <div className="grid sm:grid-cols-3 gap-6">
//                   {bipapDevices.map((device, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
//                       <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
//                         <img 
//                           src={device.image} 
//                           alt={device.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <p className="font-medium text-gray-800 text-lg">{device.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Pressure Devices */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h3 className="text-xl font-bold text-medical-green mb-4">أجهزة الضغط</h3>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                   {pressureDevices.map((device, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
//                       <div className="w-40 h-40 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
//                         <img 
//                           src={device.image} 
//                           alt={device.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <p className="text-sm font-medium text-gray-800">{device.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Sugar Devices */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h3 className="text-xl font-bold text-medical-blue mb-4">أجهزة السكر والشرائط</h3>
//                 <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
//                   {sugarDevices.map((device, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
//                       <div className="w-40 h-40 bg-white rounded-lg mx-auto mb-3 overflow-hidden border-2 border-gray-200">
//                         <img 
//                           src={device.image} 
//                           alt={device.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <p className="text-sm font-medium text-gray-800">{device.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Section */}
//           <div className="mt-16 text-center">
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">للاستفسار والطلب</h3>
//               <p className="text-gray-600 mb-6">تواصل معنا الآن للحصول على أفضل الأسعار والخدمات</p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a 
//                   href="tel:01206374441"
//                   className="bg-medical-blue hover:bg-medical-blue/90 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
//                 >
//                   <Phone className="w-5 h-5" />
//                   اتصل: 01206374441
//                 </a>
//                 <a 
//                   href="https://wa.me/201095113838"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
//                 >
//                   <MessageCircle className="w-5 h-5" />
//                   واتساب: 01095113838
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//       <WhatsAppFloat />
//       <FloatingPhoneButton />
//     </div>
//   );
// };

// export default MedicalSupplies;
