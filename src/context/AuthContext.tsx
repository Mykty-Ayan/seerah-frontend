import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { signIn, signUp } from '../services/authService';
import { SignInRequest, JwtAuthenticationResponse, SignUpRequest, SignUpResponse } from '../interfaces/index';

interface AuthContextType {
  token: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  useEffect(() => {
    const autoAuth = async () => {
      const signInRequest: SignInRequest = { user_id: '4e6253ae-6ed2-4345-bac7-7f8507e3ccfa', fcm_token: 'some_token' };
      try {
        const response: JwtAuthenticationResponse = await signIn(signInRequest);
        setToken(response.access);
        localStorage.setItem('token', response.access);
      } catch (error) {
        const signUpRequest: SignUpRequest = { username: 'defaultUsername', password: 'defaultPassword' };
        try {
          const response: SignUpResponse = await signUp(signUpRequest);
          setToken(response.token.access);
          localStorage.setItem('token', response.token.access);
        } catch (signUpError) {
          console.error('Failed to sign up:', signUpError);
        }
      }
    };

    if (!token) {
      autoAuth();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};
