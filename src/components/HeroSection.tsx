import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-white/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
              Ваша красота —
              <span className="text-yellow-600 block">наша страсть</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональные услуги красоты в уютной атмосфере. Мы создаем
              неповторимые образы, которые подчеркивают вашу индивидуальность.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-lg px-8 py-3"
              >
                <Icon name="Calendar" className="h-5 w-5 mr-2" />
                Записаться на прием
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="Play" className="h-5 w-5 mr-2" />
                Посмотреть работы
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Видов услуг</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Салон красоты"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-600"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    4.9/5
                  </div>
                  <div className="text-xs text-gray-600">Рейтинг клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
