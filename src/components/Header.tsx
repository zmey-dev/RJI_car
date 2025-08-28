import { Button } from "@/components/ui/button";
import { Car, Menu, User, Heart, LogIn, UserPlus, Search, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext";
import LanguageSwitcher from "./LanguageSwitcher";
import AuthModal from "./auth/AuthModal";
import UserMenu from "./UserMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<"signin" | "signup">("signin");
  const { t } = useTranslation();
  const { isAuthenticated, user } = useAuth();
  
  const handleAuthClick = (view: "signin" | "signup") => {
    setAuthModalView(view);
    setAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { key: 'browseCars', label: t('header.nav.browseCars'), href: '#' },
    { key: 'newCars', label: t('header.nav.newCars'), href: '#' },
    { key: 'usedCars', label: t('header.nav.usedCars'), href: '#' },
    { key: 'sellYourCar', label: t('header.nav.sellYourCar'), href: '#' },
    { key: 'finance', label: t('header.nav.finance'), href: '#' }
  ];

  return (
    <>
      <header className="bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm sticky top-0 z-50 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="p-1.5 bg-gradient-automotive rounded-lg shadow-automotive transition-transform duration-200 group-hover:scale-105">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-foreground tracking-tight">
                    {t('header.brand')}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium -mt-1">
                    Premium Cars
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Search Button */}
              <Button 
                variant="ghost" 
                size="sm"
                className="h-9 w-9 p-0 hover:bg-accent/80 transition-all duration-200"
              >
                <Search className="h-4 w-4" />
              </Button>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {isAuthenticated ? (
                <>
                  {/* Notifications */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-9 w-9 p-0 relative hover:bg-accent/80 transition-all duration-200"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                  </Button>

                  {/* Favorites */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-9 w-9 p-0 hover:bg-accent/80 transition-all duration-200"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* User Menu */}
                  <UserMenu user={user} />
                </>
              ) : (
                <div className="flex items-center space-x-2 pl-2 border-l border-border/50">
                  {/* Sign In */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleAuthClick("signin")}
                    className="h-9 px-3 font-medium hover:bg-accent/80 transition-all duration-200"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    {t('auth.signIn.signInButton')}
                  </Button>

                  {/* Sign Up */}
                  <Button 
                    variant="automotive" 
                    size="sm"
                    onClick={() => handleAuthClick("signup")}
                    className="h-9 px-4 font-medium shadow-automotive hover:shadow-luxury transition-all duration-300"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    {t('auth.signUp.createAccount')}
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Language Switcher */}
              <LanguageSwitcher />
              
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-9 w-9 p-0 hover:bg-accent/80 transition-all duration-200"
              >
                <Menu className={`h-5 w-5 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 border-t border-border/50">
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-1 mb-6">
                {navigationItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Actions */}
              {isAuthenticated ? (
                <div className="space-y-3 px-4">
                  <div className="flex items-center space-x-4 p-3 bg-accent/30 rounded-lg">
                    <div className="h-10 w-10 bg-gradient-automotive rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="justify-center">
                      <Heart className="h-4 w-4 mr-2" />
                      Favorites
                    </Button>
                    <Button variant="outline" size="sm" className="justify-center">
                      <Bell className="h-4 w-4 mr-2" />
                      Alerts
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 px-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleAuthClick("signin")}
                    className="w-full justify-center h-11 font-medium"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    {t('auth.signIn.signInButton')}
                  </Button>
                  <Button 
                    variant="automotive" 
                    size="sm"
                    onClick={() => handleAuthClick("signup")}
                    className="w-full justify-center h-11 font-medium shadow-automotive"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    {t('auth.signUp.createAccount')}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal 
        open={authModalOpen} 
        onOpenChange={setAuthModalOpen}
        defaultView={authModalView}
      />
    </>
  );
};

export default Header;