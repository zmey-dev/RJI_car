import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Settings,
  Car,
  Heart,
  Bell,
  CreditCard,
  LogOut,
  Crown,
  ChevronDown,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext";

interface UserMenuProps {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    accountType: 'buyer' | 'dealer';
    avatar?: string;
  } | null;
}

const UserMenu = ({ user }: UserMenuProps) => {
  const { t } = useTranslation();
  const { signOut } = useAuth();

  if (!user) return null;

  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  const isDealerAccount = user.accountType === 'dealer';

  const handleSignOut = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 h-10 px-2 hover:bg-accent/80 transition-all duration-200 rounded-lg"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
            <AvatarFallback className="bg-gradient-automotive text-white text-sm font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="hidden xl:flex flex-col items-start">
            <span className="text-sm font-medium leading-none">
              {user.firstName}
            </span>
            <div className="flex items-center space-x-1 mt-0.5">
              {isDealerAccount && (
                <Crown className="h-3 w-3 text-amber-500" />
              )}
              <span className="text-xs text-muted-foreground">
                {isDealerAccount ? 'Dealer' : 'Buyer'}
              </span>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        className="w-64 p-2" 
        align="end" 
        sideOffset={8}
      >
        {/* User Info Header */}
        <DropdownMenuLabel className="p-3 bg-accent/30 rounded-lg mb-2">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
              <AvatarFallback className="bg-gradient-automotive text-white font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email}
              </p>
              <div className="flex items-center space-x-1 mt-1">
                {isDealerAccount && (
                  <Crown className="h-3 w-3 text-amber-500" />
                )}
                <Badge 
                  variant={isDealerAccount ? "default" : "secondary"} 
                  className="text-xs px-2 py-0"
                >
                  {isDealerAccount ? 'Premium Dealer' : 'Car Buyer'}
                </Badge>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Account Management */}
        <DropdownMenuItem className="p-3 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors">
          <User className="mr-3 h-4 w-4" />
          <span className="flex-1">Profile Settings</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="p-3 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors">
          <Settings className="mr-3 h-4 w-4" />
          <span className="flex-1">Account Settings</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Activity Items */}
        {isDealerAccount ? (
          <>
            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors">
              <Car className="mr-3 h-4 w-4" />
              <div className="flex-1 flex items-center justify-between">
                <span>My Listings</span>
                <Badge variant="secondary" className="text-xs">12</Badge>
              </div>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors">
              <Bell className="mr-3 h-4 w-4" />
              <div className="flex-1 flex items-center justify-between">
                <span>Inquiries</span>
                <Badge variant="destructive" className="text-xs">3</Badge>
              </div>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors">
              <Heart className="mr-3 h-4 w-4" />
              <div className="flex-1 flex items-center justify-between">
                <span>Saved Cars</span>
                <Badge variant="secondary" className="text-xs">8</Badge>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors">
              <Bell className="mr-3 h-4 w-4" />
              <div className="flex-1 flex items-center justify-between">
                <span>Price Alerts</span>
                <Badge variant="secondary" className="text-xs">5</Badge>
              </div>
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuItem className="p-3 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors">
          <CreditCard className="mr-3 h-4 w-4" />
          <span className="flex-1">Billing & Payments</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Sign Out */}
        <DropdownMenuItem 
          className="p-3 cursor-pointer hover:bg-red-50 text-red-600 hover:text-red-700 rounded-lg transition-colors"
          onClick={handleSignOut}
        >
          <LogOut className="mr-3 h-4 w-4" />
          <span className="flex-1 font-medium">Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;