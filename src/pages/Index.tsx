import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl">✨</span>
              <span className="text-2xl font-bold ml-2 font-montserrat">
                Bella Vista
              </span>
            </div>
            <p className="text-gray-400 mb-6">Ваша красота — наша страсть</p>
            <div className="text-sm text-gray-500">
              © 2024 Bella Vista. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
