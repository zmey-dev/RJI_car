import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-card rounded-lg shadow-automotive p-6 border border-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Make/Model */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center">
            <Search className="h-4 w-4 mr-2" />
            {t('search.filters.allMakes')}
          </label>
          <Input placeholder={t('search.placeholder')} />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            {t('search.filters.location')}
          </label>
          <Input placeholder={t('search.filters.location')} />
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center">
            <DollarSign className="h-4 w-4 mr-2" />
            {t('search.filters.priceRange')}
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={t('search.filters.priceRange')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-25000">$0 - $25,000</SelectItem>
              <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
              <SelectItem value="50000-75000">$50,000 - $75,000</SelectItem>
              <SelectItem value="75000-100000">$75,000 - $100,000</SelectItem>
              <SelectItem value="100000+">$100,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button variant="automotive" size="lg" className="w-full">
            <Search className="h-4 w-4 mr-2" />
            {t('search.button')}
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Body Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
              <SelectItem value="convertible">Convertible</SelectItem>
              <SelectItem value="hatchback">Hatchback</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder={t('search.filters.year')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Mileage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-25000">0 - 25,000 miles</SelectItem>
              <SelectItem value="25000-50000">25,000 - 50,000 miles</SelectItem>
              <SelectItem value="50000-75000">50,000 - 75,000 miles</SelectItem>
              <SelectItem value="75000+">75,000+ miles</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Fuel Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gasoline">Gasoline</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
              <SelectItem value="diesel">Diesel</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;