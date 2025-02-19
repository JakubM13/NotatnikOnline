
import { createContext, useContext, useEffect, useState } from "react";
import { User, auth } from "./api";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, fullName: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sprawdź, czy token istnieje
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    // TODO: Dodać endpoint do pobierania aktualnego użytkownika
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const user = await auth.login({ email, password });
    setUser(user);
  };

  const register = async (email: string, password: string, fullName: string) => {
    await auth.register({ email, password, fullName });
  };

  const logout = () => {
    auth.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
