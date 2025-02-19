
import { AuthProvider as CustomAuthProvider } from '@/lib/auth-context';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CustomAuthProvider>
      {children}
    </CustomAuthProvider>
  );
};
