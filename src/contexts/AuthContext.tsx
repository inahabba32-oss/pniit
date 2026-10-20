import { createContext, useContext, useMemo, useState } from 'react';

export type Role = 'admin_system' | 'admin_metier' | 'inspecteur' | 'controleur' | 'responsable';

export type UserProfile = {
  id: string;
  email: string;
  fullName: string;
  role: Role;
  region: string;
  service: string;
  active: boolean;
};

interface AuthContextValue {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  hasRole: (role: Role | Role[]) => boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const demoUser: UserProfile = {
  id: 'usr-demo-1',
  email: 'admin@pniit.dj',
  fullName: 'M. Omar Dini',
  role: 'admin_metier',
  region: 'Djibouti',
  service: 'Direction de l’inspection du travail',
  active: true
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(demoUser);

  const login = async (email: string, password: string) => {
    if (!email || !password) return false;

    setUser({
      ...demoUser,
      email,
      fullName: email.includes('admin') ? demoUser.fullName : 'Agent habilité'
    });
    return true;
  };

  const logout = () => setUser(null);

  const hasRole = (role: Role | Role[]) => {
    if (!user) return false;
    const allowed = Array.isArray(role) ? role : [role];
    return allowed.includes(user.role);
  };

  const value = useMemo<AuthContextValue>(
    () => ({ user, isAuthenticated: !!user, login, logout, hasRole }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
