import { Car, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">{t('header.brand')}</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              {t('footer.newsletter.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <span>1-800-CARVISTA</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <span>info@carvista.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span>123 Auto Street, Car City, CC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-smooth">{t('header.nav.browseCars')}</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">{t('header.nav.newCars')}</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">{t('header.nav.usedCars')}</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">{t('header.nav.sellYourCar')}</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">{t('footer.services.finance')}</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">{t('footer.services.insurance')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.support.title')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-smooth">{t('footer.support.help')}</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">{t('footer.company.contact')}</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">{t('footer.services.buyingGuide')}</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">{t('footer.support.terms')}</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">{t('footer.support.privacy')}</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">{t('footer.connect.dealers')}</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-sm text-primary-foreground/80 text-center md:text-right">
              <p>{t('footer.copyright')}</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="hover:text-accent transition-smooth">{t('footer.support.privacy')}</a>
                <a href="#" className="hover:text-accent transition-smooth">{t('footer.support.terms')}</a>
                <a href="#" className="hover:text-accent transition-smooth">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;