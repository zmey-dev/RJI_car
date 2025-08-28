import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Fuel, Calendar, MapPin, Eye } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface CarCardProps {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  location: string;
  image: string;
  condition: "new" | "used" | "certified";
}

const CarCard = ({ 
  id, 
  make, 
  model, 
  year, 
  price, 
  mileage, 
  fuelType, 
  location, 
  image, 
  condition 
}: CarCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { t } = useTranslation();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <Card className="group hover:shadow-card-hover transition-luxury hover:scale-[1.02] cursor-pointer bg-card border-border">
      <div className="relative">
        {/* Car Image */}
        <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={`${year} ${make} ${model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
          />
        </div>
        
        {/* Condition Badge */}
        <Badge 
          variant={condition === 'new' ? 'default' : condition === 'certified' ? 'secondary' : 'outline'}
          className="absolute top-3 left-3 capitalize"
        >
          {t(`carCard.condition.${condition}`)}
        </Badge>
        
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
        >
          <Heart 
            className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`}
          />
        </Button>
      </div>

      <CardContent className="p-4">
        {/* Car Title and Price */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg text-card-foreground">
              {year} {make} {model}
            </h3>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(price)}
            </p>
          </div>
        </div>

        {/* Car Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {year}
          </div>
          <div className="flex items-center">
            <Fuel className="h-4 w-4 mr-2" />
            {fuelType}
          </div>
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-2" />
            {formatMileage(mileage)} {t('carCard.details.miles')}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="automotive" className="flex-1">
            {t('carCard.details.viewDetails')}
          </Button>
          <Button variant="accent" className="flex-1">
            {t('carCard.details.contactDealer')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;