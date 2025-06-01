import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Icon name="Sparkles" className="h-8 w-8 text-yellow-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900 font-montserrat">
              Bella Vista
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
            >
              Галерея
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
