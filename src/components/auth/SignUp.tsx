import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, User, Phone, Car } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface SignUpProps {
  onSignInClick: () => void;
}

const SignUp = ({ onSignInClick }: SignUpProps) => {
  const { t } = useTranslation();
  const { signUp, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "buyer" as "buyer" | "dealer"
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (formData.password !== formData.confirmPassword) {
      setError(t('auth.signUp.passwordMismatch'));
      return;
    }
    
    if (!agreeToTerms) {
      setError(t('auth.signUp.mustAgreeToTerms'));
      return;
    }
    
    try {
      await signUp({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        accountType: formData.accountType
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    }
  };

  const handleSocialSignUp = (provider: string) => {
    console.log(`Sign up with ${provider}`);
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Car className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t('auth.signUp.title')}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t('auth.signUp.subtitle')}
        </p>
      </div>

      {/* Account Type Selection */}
      <div className="space-y-3">
        <Label>{t('auth.signUp.accountType')}</Label>
        <RadioGroup 
          value={formData.accountType}
          onValueChange={(value) => setFormData(prev => ({ ...prev, accountType: value }))}
          disabled={isLoading}
        >
          <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/5 transition-colors">
            <RadioGroupItem value="buyer" id="buyer" />
            <Label htmlFor="buyer" className="flex-1 cursor-pointer">
              <div className="font-medium">{t('auth.signUp.buyerAccount')}</div>
              <div className="text-sm text-muted-foreground">
                {t('auth.signUp.buyerDescription')}
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/5 transition-colors">
            <RadioGroupItem value="dealer" id="dealer" />
            <Label htmlFor="dealer" className="flex-1 cursor-pointer">
              <div className="font-medium">{t('auth.signUp.dealerAccount')}</div>
              <div className="text-sm text-muted-foreground">
                {t('auth.signUp.dealerDescription')}
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Social Sign Up Buttons */}
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => handleSocialSignUp('google')}
          disabled={isLoading}
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {t('auth.signUp.continueWithGoogle')}
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {t('auth.signUp.orContinueWith')}
          </span>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
          {error}
        </div>
      )}

      {/* Sign Up Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">{t('auth.signUp.firstName')}</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder={t('auth.signUp.firstNamePlaceholder')}
                value={formData.firstName}
                onChange={handleInputChange}
                className="pl-10"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">{t('auth.signUp.lastName')}</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder={t('auth.signUp.lastNamePlaceholder')}
                value={formData.lastName}
                onChange={handleInputChange}
                className="pl-10"
                required
                disabled={isLoading}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t('auth.signUp.email')}</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('auth.signUp.emailPlaceholder')}
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{t('auth.signUp.phone')}</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t('auth.signUp.phonePlaceholder')}
              value={formData.phone}
              onChange={handleInputChange}
              className="pl-10"
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">{t('auth.signUp.password')}</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder={t('auth.signUp.passwordPlaceholder')}
              value={formData.password}
              onChange={handleInputChange}
              className="pl-10 pr-10"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">{t('auth.signUp.confirmPassword')}</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder={t('auth.signUp.confirmPasswordPlaceholder')}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="pl-10 pr-10"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="terms" 
              checked={agreeToTerms}
              onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
              disabled={isLoading}
              className="mt-0.5"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t('auth.signUp.agreeToTerms')}{" "}
              <a href="#" className="text-primary hover:underline">
                {t('auth.signUp.termsLink')}
              </a>{" "}
              {t('auth.signUp.and')}{" "}
              <a href="#" className="text-primary hover:underline">
                {t('auth.signUp.privacyLink')}
              </a>
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox 
              id="newsletter" 
              checked={subscribeNewsletter}
              onCheckedChange={(checked) => setSubscribeNewsletter(checked as boolean)}
              disabled={isLoading}
              className="mt-0.5"
            />
            <label
              htmlFor="newsletter"
              className="text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t('auth.signUp.subscribeNewsletter')}
            </label>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          variant="automotive"
          disabled={isLoading || !agreeToTerms}
        >
          {isLoading ? t('auth.signUp.creatingAccount') : t('auth.signUp.createAccount')}
        </Button>
      </form>

      {/* Sign In Link */}
      <div className="text-center text-sm">
        <span className="text-muted-foreground">
          {t('auth.signUp.alreadyHaveAccount')}{" "}
        </span>
        <Button
          type="button"
          variant="link"
          className="px-0 font-semibold text-primary"
          onClick={onSignInClick}
          disabled={isLoading}
        >
          {t('auth.signUp.signInLink')}
        </Button>
      </div>
    </div>
  );
};

export default SignUp;