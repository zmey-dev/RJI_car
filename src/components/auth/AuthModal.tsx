import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useTranslation } from "react-i18next";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultView?: "signin" | "signup";
}

const AuthModal = ({ open, onOpenChange, defaultView = "signin" }: AuthModalProps) => {
  const [view, setView] = useState<"signin" | "signup">(defaultView);
  const { t } = useTranslation();

  const handleViewChange = (newView: "signin" | "signup") => {
    setView(newView);
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    // Implement forgot password logic
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="p-6">
          {view === "signin" ? (
            <SignIn
              onSignUpClick={() => handleViewChange("signup")}
              onForgotPasswordClick={handleForgotPassword}
            />
          ) : (
            <SignUp onSignInClick={() => handleViewChange("signin")} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;