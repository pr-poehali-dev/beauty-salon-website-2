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
    icon: "Scissors",
    title: "Стрижка и укладка",
    description:
      "Профессиональные стрижки для любого типа волос. Создаем стиль, который подходит именно вам.",
    price: "от 2 500 ₽",
    image:
      "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: "Palette",
    title: "Окрашивание",
    description:
      "Современные техники окрашивания: балаяж, омбре, airtouch. Используем премиальные краски.",
    price: "от 4 000 ₽",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: "Sparkles",
    title: "Макияж",
    description:
      "Дневной и вечерний макияж от профессиональных визажистов. Подбор индивидуального стиля.",
    price: "от 3 000 ₽",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
