import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  accountType: 'buyer' | 'dealer';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  signUp: (userData: SignUpData) => Promise<void>;
  signOut: () => void;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  accountType: 'buyer' | 'dealer';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem('carvista_user');
        const token = localStorage.getItem('carvista_token');
        
        if (storedUser && token) {
          const userData = JSON.parse(storedUser);
          // In a real app, you would validate the token with your backend
          setUser(userData);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        localStorage.removeItem('carvista_user');
        localStorage.removeItem('carvista_token');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const signIn = async (email: string, password: string, rememberMe = false) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful login
      const mockUser: User = {
        id: '1',
        email,
        firstName: 'John',
        lastName: 'Doe',
        accountType: 'buyer',
        avatar: undefined
      };

      const mockToken = 'mock_jwt_token_' + Date.now();

      if (rememberMe) {
        localStorage.setItem('carvista_user', JSON.stringify(mockUser));
        localStorage.setItem('carvista_token', mockToken);
      } else {
        sessionStorage.setItem('carvista_user', JSON.stringify(mockUser));
        sessionStorage.setItem('carvista_token', mockToken);
      }

      setUser(mockUser);
    } catch (error) {
      throw new Error('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (userData: SignUpData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful registration
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        accountType: userData.accountType,
        avatar: undefined
      };

      const mockToken = 'mock_jwt_token_' + Date.now();

      localStorage.setItem('carvista_user', JSON.stringify(newUser));
      localStorage.setItem('carvista_token', mockToken);

      setUser(newUser);
    } catch (error) {
      throw new Error('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem('carvista_user');
    localStorage.removeItem('carvista_token');
    sessionStorage.removeItem('carvista_user');
    sessionStorage.removeItem('carvista_token');
    setUser(null);
  };

  const updateProfile = async (userData: Partial<User>) => {
    if (!user) throw new Error('No user logged in');
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedUser = { ...user, ...userData };
      localStorage.setItem('carvista_user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (error) {
      throw new Error('Profile update failed');
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    signIn,
    signUp,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;