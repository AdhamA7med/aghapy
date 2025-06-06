import bloodTestImg from '@/assets/blood-test.jpg';
import ecgImg from '@/assets/electrocardiogram-ecg-hand-cardiogram-printout-male-patient-background.jpg';
import homeCareImg from '@/assets/Home-Care-Alhayat-Alhayat_03.png';
import nurseImg from '@/assets/blood-test2.webp';
import seniorsImg from '@/assets/Home-visit-768x512.jpeg';




import { Phone, MessageCircle, Heart, Stethoscope, UserCheck, Clock, Shield, Users, TestTube, Activity } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingPhoneButton from '@/components/FloatingPhoneButton';

const MedicalServices = () => {
  const services = [
    {
      id: 1,
      title: "خدمة التحاليل المنزلية",
      description: "نقدم خدمة التحاليل الطبية في منزلك مع فريق متخصص ومعمل معتمد لضمان دقة النتائج وسرعة الحصول عليها",
      image: bloodTestImg,
      features: [
        "تحاليل دم شاملة (صورة دم كاملة، وظائف كبد وكلى)",
        "تحاليل السكر والدهون والكوليسترول",
        "تحاليل الهرمونات والفيتامينات",
        "تحاليل البول والبراز والمزارع البكتيرية"
      ],
      icon: TestTube
    },
    {
      id: 2,
      title: "رسم القلب المنزلي",
      description: "خدمة رسم القلب الكهربائي في المنزل بأحدث الأجهزة المحمولة مع طبيب متخصص لقراءة النتائج فوراً",
      image: ecgImg,
      features: [
        "رسم قلب كهربائي (ECG) بأحدث الأجهزة",
        "قراءة فورية للنتائج من طبيب متخصص",
        "متابعة حالات عدم انتظام ضربات القلب",
        "فحص شامل للقلب والشرايين"
      ],
      icon: Activity
    },
    {
      id: 3,
      title: "الخدمات الطبية المنزلية",
      description: "نقدم خدمات طبية متخصصة في منزلك مع فريق طبي مؤهل ومتاح 24/7 لضمان حصولك على أفضل رعاية طبية ممكنة",
      image: homeCareImg,
      features: [
        "زيارات منزلية سريعة للطوارئ",
        "متابعة طبية دورية للحالات المزمنة",
        "حقن وتطعيمات منزلية",
        "قياس الضغط والسكر والحرارة"
      ],
      icon: Stethoscope
    },
    {
      id: 4,
      title: "تمريض منزلي متخصص",
      description: "فريق تمريض محترف ومدرب على أعلى مستوى لتقديم خدمات التمريض المنزلي بكفاءة عالية ورحمة واهتمام بالمريض",
      image: nurseImg,
      features: [
        "تمريض ما بعد العمليات الجراحية",
        "إدارة الأدوية والمتابعة الطبية",
        "تمريض ليلي ونهاري حسب الحاجة",
        "العناية بالجروح والضمادات الطبية"
      ],
      icon: UserCheck
    },
    {
      id: 5,
      title: "رعاية كبار السن",
      description: "نوفر رعاية شاملة ومتخصصة لكبار السن مع الاهتمام بالجوانب النفسية والصحية والاجتماعية لضمان حياة كريمة ومريحة",
      image: seniorsImg,
      features: [
        "رعاية يومية شاملة لكبار السن",
        "مساعدة في الأنشطة اليومية والحركة",
        "متابعة الحالة الصحية والنفسية",
        "رفقة وتسلية لتحسين الحالة المعنوية"
      ],
      icon: Heart
    }
    // {
    //   id: 6,
    //   title: "العلاج الطبيعي المنزلي",
    //   description: "جلسات علاج طبيعي متخصصة في المنزل مع أخصائيين مؤهلين لإعادة التأهيل والعلاج الطبيعي بأحدث التقنيات",
    //   image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    //   features: [
    //     "إعادة تأهيل ما بعد الإصابات",
    //     "علاج طبيعي للعمود الفقري والمفاصل",
    //     "تمارين علاجية مخصصة لكل حالة",
    //     "أجهزة علاج طبيعي متقدمة"
    //   ],
    //   icon: Users
    // }
  ];

  const contactInfo = {
    phone: "01211112471",
    whatsapp: "01211112471"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-800">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Stethoscope className="w-16 h-16 text-medical-blue" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">الخدمات الطبية</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              نقدم أفضل الخدمات الطبية المنزلية مع فريق طبي متخصص متاح 24/7
            </p>
            
            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 bg-medical-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-medical-blue/90 transition-all duration-300 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                اتصل الآن: {contactInfo.phone}
              </a>
              
              <a 
                href={`https://wa.me/2${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                واتساب: {contactInfo.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">خدماتنا المتخصصة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر مجموعة شاملة من الخدمات الطبية المنزلية عالية الجودة
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 md:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-medical-blue/10 rounded-full p-3">
                          <IconComponent className="w-8 h-8 text-medical-blue" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{service.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-medical-blue rounded-full mt-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Contact Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                          href={`tel:${contactInfo.phone}`}
                          className="flex items-center justify-center gap-2 bg-medical-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-medical-blue/90 transition-all duration-300"
                        >
                          <Phone className="w-5 h-5" />
                          اتصل الآن
                        </a>
                        
                        <a 
                          href={`https://wa.me/2${contactInfo.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
                        >
                          <MessageCircle className="w-5 h-5" />
                          واتساب
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">لماذا تختار خدماتنا؟</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "متاح 24/7", desc: "خدماتنا متاحة على مدار الساعة" },
              { icon: Shield, title: "أمان وثقة", desc: "فريق طبي مؤهل ومرخص" },
              { icon: Heart, title: "رعاية شخصية", desc: "اهتمام خاص بكل مريض" },
              { icon: Users, title: "فريق متخصص", desc: "أطباء وممرضين ذوي خبرة" }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                  <div className="bg-medical-blue/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">احجز معنا الآن</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تواصل معنا للحجز والاستفسار وتحديد الخدمة المناسبة لحالتك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-medical-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-medical-blue/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                اتصل الآن
              </a>
              
              <a 
                href={`https://wa.me/2${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                واتساب
              </a>
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

export default MedicalServices;









// import { Phone, MessageCircle, Heart, Stethoscope, UserCheck, Clock, Shield, Users, TestTube, Activity } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import WhatsAppFloat from '@/components/WhatsAppFloat';
// import FloatingPhoneButton from '@/components/FloatingPhoneButton';

// const MedicalServices = () => {
//   const services = [
//     {
//       id: 1,
//       title: "خدمة التحاليل المنزلية",
//       description: "نقدم خدمة التحاليل الطبية في منزلك مع فريق متخصص ومعمل معتمد لضمان دقة النتائج وسرعة الحصول عليها",
//       image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
//       features: [
//         "تحاليل دم شاملة (صورة دم كاملة، وظائف كبد وكلى)",
//         "تحاليل السكر والدهون والكوليسترول",
//         "تحاليل الهرمونات والفيتامينات",
//         "تحاليل البول والبراز والمزارع البكتيرية"
//       ],
//       icon: TestTube
//     },
//     {
//       id: 2,
//       title: "رسم القلب المنزلي",
//       description: "خدمة رسم القلب الكهربائي في المنزل بأحدث الأجهزة المحمولة مع طبيب متخصص لقراءة النتائج فوراً",
//       image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
//       features: [
//         "رسم قلب كهربائي (ECG) بأحدث الأجهزة",
//         "قراءة فورية للنتائج من طبيب متخصص",
//         "متابعة حالات عدم انتظام ضربات القلب",
//         "فحص شامل للقلب والشرايين"
//       ],
//       icon: Activity
//     },
//     {
//       id: 3,
//       title: "الخدمات الطبية المنزلية",
//       description: "نقدم خدمات طبية متخصصة في منزلك مع فريق طبي مؤهل ومتاح 24/7 لضمان حصولك على أفضل رعاية طبية ممكنة",
//       image: "https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=800&q=80",
//       features: [
//         "زيارات منزلية سريعة للطوارئ",
//         "متابعة طبية دورية للحالات المزمنة",
//         "حقن وتطعيمات منزلية",
//         "قياس الضغط والسكر والحرارة"
//       ],
//       icon: Stethoscope
//     },
//     {
//       id: 4,
//       title: "تمريض منزلي متخصص",
//       description: "فريق تمريض محترف ومدرب على أعلى مستوى لتقديم خدمات التمريض المنزلي بكفاءة عالية ورحمة واهتمام بالمريض",
//       image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
//       features: [
//         "تمريض ما بعد العمليات الجراحية",
//         "إدارة الأدوية والمتابعة الطبية",
//         "تمريض ليلي ونهاري حسب الحاجة",
//         "العناية بالجروح والضمادات الطبية"
//       ],
//       icon: UserCheck
//     },
//     {
//       id: 5,
//       title: "رعاية كبار السن",
//       description: "نوفر رعاية شاملة ومتخصصة لكبار السن مع الاهتمام بالجوانب النفسية والصحية والاجتماعية لضمان حياة كريمة ومريحة",
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
//       features: [
//         "رعاية يومية شاملة لكبار السن",
//         "مساعدة في الأنشطة اليومية والحركة",
//         "متابعة الحالة الصحية والنفسية",
//         "رفقة وتسلية لتحسين الحالة المعنوية"
//       ],
//       icon: Heart
//     }
//     // {
//     //   id: 6,
//     //   title: "العلاج الطبيعي المنزلي",
//     //   description: "جلسات علاج طبيعي متخصصة في المنزل مع أخصائيين مؤهلين لإعادة التأهيل والعلاج الطبيعي بأحدث التقنيات",
//     //   image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
//     //   features: [
//     //     "إعادة تأهيل ما بعد الإصابات",
//     //     "علاج طبيعي للعمود الفقري والمفاصل",
//     //     "تمارين علاجية مخصصة لكل حالة",
//     //     "أجهزة علاج طبيعي متقدمة"
//     //   ],
//     //   icon: Users
//     // }
//   ];

//   const contactInfo = {
//     phone: "01211112471",
//     whatsapp: "01211112471"
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
      
//       {/* Hero Section */}
//       <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center text-gray-800">
//             <div className="flex justify-center mb-6">
//               <div className="bg-white rounded-full p-4 shadow-lg">
//                 <Stethoscope className="w-16 h-16 text-medical-blue" />
//               </div>
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">الخدمات الطبية</h1>
//             <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
//               نقدم أفضل الخدمات الطبية المنزلية مع فريق طبي متخصص متاح 24/7
//             </p>
            
//             {/* Contact Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <a 
//                 href={`tel:${contactInfo.phone}`}
//                 className="flex items-center gap-3 bg-medical-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-medical-blue/90 transition-all duration-300 shadow-lg"
//               >
//                 <Phone className="w-6 h-6" />
//                 اتصل الآن: {contactInfo.phone}
//               </a>
              
//               <a 
//                 href={`https://wa.me/2${contactInfo.whatsapp}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg"
//               >
//                 <MessageCircle className="w-6 h-6" />
//                 واتساب: {contactInfo.whatsapp}
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">خدماتنا المتخصصة</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               نوفر مجموعة شاملة من الخدمات الطبية المنزلية عالية الجودة
//             </p>
//           </div>

//           <div className="space-y-16">
//             {services.map((service, index) => {
//               const IconComponent = service.icon;
//               return (
//                 <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
//                   {/* Image */}
//                   <div className="w-full lg:w-1/2">
//                     <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105">
//                       <img 
//                         src={service.image}
//                         alt={service.title}
//                         className="w-full h-80 md:h-96 object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="w-full lg:w-1/2">
//                     <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
//                       <div className="flex items-center gap-4 mb-6">
//                         <div className="bg-medical-blue/10 rounded-full p-3">
//                           <IconComponent className="w-8 h-8 text-medical-blue" />
//                         </div>
//                         <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{service.title}</h3>
//                       </div>
                      
//                       <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                         {service.description}
//                       </p>

//                       <div className="space-y-4 mb-8">
//                         {service.features.map((feature, featureIndex) => (
//                           <div key={featureIndex} className="flex items-start gap-3">
//                             <div className="w-2 h-2 bg-medical-blue rounded-full mt-3 flex-shrink-0"></div>
//                             <span className="text-gray-700 text-lg">{feature}</span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Contact Buttons */}
//                       <div className="flex flex-col sm:flex-row gap-3">
//                         <a 
//                           href={`tel:${contactInfo.phone}`}
//                           className="flex items-center justify-center gap-2 bg-medical-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-medical-blue/90 transition-all duration-300"
//                         >
//                           <Phone className="w-5 h-5" />
//                           اتصل الآن
//                         </a>
                        
//                         <a 
//                           href={`https://wa.me/2${contactInfo.whatsapp}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
//                         >
//                           <MessageCircle className="w-5 h-5" />
//                           واتساب
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">لماذا تختار خدماتنا؟</h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: Clock, title: "متاح 24/7", desc: "خدماتنا متاحة على مدار الساعة" },
//               { icon: Shield, title: "أمان وثقة", desc: "فريق طبي مؤهل ومرخص" },
//               { icon: Heart, title: "رعاية شخصية", desc: "اهتمام خاص بكل مريض" },
//               { icon: Users, title: "فريق متخصص", desc: "أطباء وممرضين ذوي خبرة" }
//             ].map((feature, index) => {
//               const IconComponent = feature.icon;
//               return (
//                 <div key={index} className="text-center bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
//                   <div className="bg-medical-blue/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                     <IconComponent className="w-8 h-8 text-medical-blue" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center text-gray-800">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">احجز معنا الآن</h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto">
//               تواصل معنا للحجز والاستفسار وتحديد الخدمة المناسبة لحالتك
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a 
//                 href={`tel:${contactInfo.phone}`}
//                 className="bg-medical-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-medical-blue/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
//               >
//                 <Phone className="w-6 h-6" />
//                 اتصل الآن
//               </a>
              
//               <a 
//                 href={`https://wa.me/2${contactInfo.whatsapp}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
//               >
//                 <MessageCircle className="w-6 h-6" />
//                 واتساب
//               </a>
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

// export default MedicalServices;
