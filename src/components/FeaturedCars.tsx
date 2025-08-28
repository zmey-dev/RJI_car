import CarCard from "./CarCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import car1Image from "@/assets/car-1.jpg";
import car2Image from "@/assets/car-2.jpg";
import car3Image from "@/assets/car-3.jpg";
import { useTranslation } from "react-i18next";

const FeaturedCars = () => {
  const { t } = useTranslation();
  const featuredCars = [
    {
      id: 1,
      make: "BMW",
      model: "X5 M Sport",
      year: 2023,
      price: 65900,
      mileage: 12500,
      fuelType: "Gasoline",
      location: "New York, NY",
      image: car1Image,
      condition: "certified" as const,
    },
    {
      id: 2,
      make: "Mercedes-Benz",
      model: "GLC 300",
      year: 2024,
      price: 48900,
      mileage: 8900,
      fuelType: "Hybrid",
      location: "Los Angeles, CA",
      image: car2Image,
      condition: "new" as const,
    },
    {
      id: 3,
      make: "Porsche",
      model: "911 Carrera",
      year: 2022,
      price: 125900,
      mileage: 15200,
      fuelType: "Gasoline",
      location: "Miami, FL",
      image: car3Image,
      condition: "used" as const,
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('featuredCars.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('featuredCars.description')}
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="automotive" size="lg" className="px-8">
            {t('featuredCars.viewAllVehicles')}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;