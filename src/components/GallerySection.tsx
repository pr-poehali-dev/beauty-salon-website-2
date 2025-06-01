import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Стрижка боб",
    category: "Стрижки",
  },
  {
    url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Вечерний макияж",
    category: "Макияж",
  },
  {
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Дизайн ногтей",
    category: "Маникюр",
  },
  {
    url: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Оформление бровей",
    category: "Брови",
  },
  {
    url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Балаяж",
    category: "Окрашивание",
  },
  {
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Уход за лицом",
    category: "Косметология",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Портфолио наших мастеров. Каждая работа — это произведение
            искусства, созданное с любовью и профессионализмом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium text-yellow-400 mb-1">
                    {image.category}
                  </div>
                  <div className="text-lg font-semibold">{image.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Посмотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
