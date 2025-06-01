import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Eye",
    title: "Перманентный макияж бровей",
    description:
      "Современная техника татуажа бровей для создания идеальной формы. Долговременный результат до 2 лет.",
    price: "от 8 000 ₽",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: "Heart",
    title: "Перманент губ",
    description:
      "Татуаж губ для естественного цвета и четкого контура. Профессиональные пигменты премиум класса.",
    price: "от 10 000 ₽",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: "Sparkles",
    title: "Ламинирование бровей и ресниц",
    description:
      "Процедура для придания бровям и ресницам ухоженного вида. Эффект держится до 2 месяцев.",
    price: "от 3 500 ₽",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: "Hand",
    title: "Маникюр и педикюр",
    description:
      "Классический и аппаратный маникюр. Дизайн ногтей любой сложности с долговременным покрытием.",
    price: "от 1 800 ₽",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: "Eye",
    title: "Брови и ресницы",
    description:
      "Оформление бровей, наращивание и ламинирование ресниц. Создаем выразительный взгляд.",
    price: "от 1 500 ₽",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: "Flower",
    title: "Уход за лицом",
    description:
      "Профессиональные процедуры по уходу за кожей лица. Чистки, пилинги, увлажняющие маски.",
    price: "от 2 200 ₽",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг красоты в одном месте. Работаем только с
            качественными материалами и современным оборудованием.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Icon
                      name={service.icon as any}
                      className="h-6 w-6 text-yellow-600"
                    />
                  </div>
                  <span className="text-lg font-semibold text-yellow-600">
                    {service.price}
                  </span>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-yellow-600 group-hover:text-white transition-colors"
                >
                  Записаться
                  <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
