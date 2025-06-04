
import { Heart, Stethoscope, Cross } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Heart className="w-12 h-12 text-medical-blue" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">من نحن</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            شركة اغابي هي المؤسسة الرائدة في مجال خدمات التمريض المنزلي والرعاية الطبية المتخصصة في القاهرة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="space-y-8">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-medical-blue/10 rounded-full p-3 ml-4">
                    <Cross className="w-8 h-8 text-medical-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">رسالتنا</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  نلتزم بتقديم أعلى مستويات الرعاية الطبية المنزلية مع الحفاظ على كرامة وراحة مرضانا في بيئة آمنة ومألوفة لهم.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-medical-teal/10 rounded-full p-3 ml-4">
                    <Stethoscope className="w-8 h-8 text-medical-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">رؤيتنا</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  أن نكون الخيار الأول للعائلات في القاهرة للحصول على خدمات التمريض المنزلي الموثوقة والمتميزة.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-medical-green/10 rounded-full p-3 ml-4">
                    <Heart className="w-8 h-8 text-medical-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">قيمنا</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-medical-blue rounded-full ml-3"></span>
                    الاحترافية والتميز في الخدمة
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-medical-teal rounded-full ml-3"></span>
                    الرحمة والتعاطف مع المرضى
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-medical-green rounded-full ml-3"></span>
                    الثقة والأمانة في التعامل
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="relative">
              {/* Main Image Container - Medical team */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
                  alt="فريق طبي متخصص كامل"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/20 to-transparent"></div>
              </div>

              {/* Beautiful Caption */}
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-gray-700 bg-white rounded-2xl p-4 shadow-lg">
                  "صورة مميزة تجمع فريق شركة أغابي، معنا انت في أيدٍ آمنه"
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">خبرتنا وتخصصنا</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                فريق طبي متخصص ومؤهل من أفضل الممرضين والممرضات مع خبرة واسعة في التعامل مع جميع الحالات الطبية المختلفة.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-xl font-bold text-medical-blue">98%</div>
                  <p className="text-sm text-gray-600">رضا العملاء</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-xl font-bold text-medical-teal">24/7</div>
                  <p className="text-sm text-gray-600">متاح دائماً</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
