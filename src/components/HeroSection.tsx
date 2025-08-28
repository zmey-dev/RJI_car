import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Users } from "lucide-react";
import SearchBar from "./SearchBar";
import heroCarImage from "@/assets/hero-car.jpg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroCarImage})` }}
      />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            {t('hero.title')}
            <span className="block text-accent"> {t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            {t('hero.description')}
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center text-primary-foreground/90">
              <Star className="h-5 w-5 text-accent mr-2" />
              <span className="font-semibold">{t('hero.stats.rating')}</span>
            </div>
            <div className="flex items-center text-primary-foreground/90">
              <Shield className="h-5 w-5 text-accent mr-2" />
              <span className="font-semibold">{t('hero.stats.verifiedDealers')}</span>
            </div>
            <div className="flex items-center text-primary-foreground/90">
              <Users className="h-5 w-5 text-accent mr-2" />
              <span className="font-semibold">{t('hero.stats.happyCustomers')}</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-8">
              {t('hero.buttons.browseAllCars')}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8">
              {t('hero.buttons.sellYourCar')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;