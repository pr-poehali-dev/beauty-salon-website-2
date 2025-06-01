import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Контакты и запись
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы находимся в самом центре города. Записывайтесь на удобное время и
            приходите к нам за красотой!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Icon name="MapPin" className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Адрес
                  </h3>
                  <p className="text-gray-600">
                    г. Москва, ул. Тверская, д. 15, стр. 1<br />2 этаж, салон
                    "Bella Vista"
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Icon name="Clock" className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Время работы
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <div>Пн-Пт: 9:00 - 21:00</div>
                    <div>Сб-Вс: 10:00 - 20:00</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Icon name="Phone" className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Телефон
                  </h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Звоните с 9:00 до 21:00
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Button className="flex-1 bg-yellow-600 hover:bg-yellow-700">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                Позвонить
              </Button>
              <Button variant="outline" className="flex-1">
                <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-center">
                Быстрая запись онлайн
              </CardTitle>
            </CardHeader>

            <CardContent className="px-0 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Выберите услугу
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option>Стрижка и укладка</option>
                  <option>Окрашивание</option>
                  <option>Макияж</option>
                  <option>Маникюр</option>
                  <option>Уход за лицом</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дата
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Время
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                    <option>10:00</option>
                    <option>12:00</option>
                    <option>14:00</option>
                    <option>16:00</option>
                    <option>18:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  placeholder="Как к вам обращаться?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-lg py-3">
                <Icon name="Calendar" className="h-5 w-5 mr-2" />
                Записаться на прием
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Мы свяжемся с вами для подтверждения записи
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
