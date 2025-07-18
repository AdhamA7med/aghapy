
import { Package, Stethoscope, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: "المستلزمات الطبية",
      description: "كل اللي ممكن تحتاجه هتلاقيه عندنا بأفضل سعر وأعلى جودة",
      items: [
        "حفاضات كبار السن ومفارش السرير",
        "إيجار سرير طبي - كراسي ومشايات وعكاكيز وسراير طبية",
        "أجهزة - إيجار أجهزة الأكسجين",
        "جميع مستلزمات العيادات والمستشفيات"
      ],
      whatsapp: "01095113838",
      color: "medical-blue",
      link: "/medical-supplies"
    },
    {
      icon: Stethoscope,
      title: "الخدمات الطبية المنزلية",
      description: "خدماتنا متاحة 24/7 اطلبنا هتلاقينا",
      items: [
        "خدمة تحاليل منزلية",
        "رسم قلب منزلي",
        "زيارات منزلية سريعة",
        "تمريض ومساعدين تمريض في البيت وقt ما تحب"
      ],
      whatsapp: "01211112471",
      color: "medical-teal",
      link: "/medical-services"
    },
    {
      icon: Users,
      title: "انضم لفريق العمل",
      description: "للتقديم على شغل تمريض أو مساعدين تمريض بشركة أغابي",
      items: [
        "وظائف تمريض متنوعة",
        "مساعدين تمريض",
        "بيئة عمل مميزة",
        "تطوير مهني مستمر"
      ],
      whatsapp: "01276475528",
      color: "medical-green",
      link: "/nursing-jobs"
    }
  ];

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-medical-blue to-medical-teal rounded-full p-4 shadow-lg">
              <Stethoscope className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">خدماتنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الطبية والمستلزمات الطبية عالية الجودة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 h-full shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${service.color}/10 mb-6 mx-auto`}>
                    <IconComponent className={`w-8 h-8 text-${service.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Items List */}
                  <div className="flex-1 mb-6">
                    <ul className="text-right space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                          <span className={`w-2 h-2 bg-${service.color} rounded-full mt-2 ml-3 flex-shrink-0`}></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    {service.link && (
                      <Link 
                        to={service.link}
                        onClick={handleLinkClick}
                        className={`w-full bg-${service.color}/10 hover:bg-${service.color}/20 text-${service.color} font-semibold py-3 px-6 rounded-full transition-all duration-300 block text-center`}
                      >
                        {service.title === "انضم لفريق العمل" ? "تعرف على الأوراق المطلوبة" : 
                         service.title === "الخدمات الطبية المنزلية" ? "تصفح الخدمات الطبية" : "تصفح المنتجات"}
                      </Link>
                    )}
                    
                    <a 
                      href={`https://wa.me/2${service.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                      </svg>
                      واتساب: {service.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
