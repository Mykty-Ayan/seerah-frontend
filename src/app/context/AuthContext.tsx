"use client"

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { signIn, signUp, refreshToken } from '../services/authService';
import { ISignInRequest, IJwtAuthenticationResponse, ISignUpRequest, SignUpResponse, IRefreshTokenRequest } from '@/app/interfaces';
import Cookies from 'js-cookie';

interface AuthContextType {
  token: string | null;
  userId: string | null;
  setToken: (token: string | null) => void;
  setUserId: (userId: string | null) => void;
  refreshAuthToken: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let storedToken = localStorage.getItem('token');
    // const storedUserId = localStorage.getItem('user_id');

    if (!storedToken) {
      const cookieToken = Cookies.get("token");
      if (cookieToken) {
        localStorage.setItem("token", cookieToken);
        storedToken = cookieToken
      }
    }

    if (storedToken) setToken(storedToken);
        // if (storedUserId) setUserId(storedUserId);
    // Commented out auto-auth code to disable automatic sign-in and sign-up

    // const autoAuth = async () => {
    //   const signInRequest: ISignInRequest = { user_id: '33ab1a75-d781-46c4-b20f-592515653599', fcm_token: 'some_token' };
    //   try {
    //     const response: IJwtAuthenticationResponse = await signIn(signInRequest);
    //     setToken(response.access);
    //     setUserId(signInRequest.user_id);
    //     localStorage.setItem('token', response.access);
    //     localStorage.setItem('user_id', signInRequest.user_id);
    //   } catch (error) {
    //     const signUpRequest: ISignUpRequest = { username: 'defaultUsername', password: 'defaultPassword' };
    //     try {
    //       const response: SignUpResponse = await signUp(signUpRequest);
    //       setToken(response.token.access);
    //       setUserId(response.user.id);
    //       localStorage.setItem('token', response.token.access);
    //       localStorage.setItem('user_id', response.user.id);
    //     } catch (signUpError) {
    //       console.error('Failed to sign up:', signUpError);
    //     }
    //   }
    // };

    // if (!token) {
    //   autoAuth();
    // }
  }, [token]);

  const refreshAuthToken = async () => {
    if (userId) {
      const refreshTokenRequest: IRefreshTokenRequest = { user_id: userId };
      try {
        const newToken = await refreshToken(refreshTokenRequest);
        setToken(newToken);
        localStorage.setItem('token', newToken);
      } catch (error) {
        console.error('Failed to refresh token:', error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ token, userId, setToken, setUserId, refreshAuthToken }}>
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

export const getUserId = (): string | null => {
  return localStorage.getItem('user_id');
};

export const setToken = (token: string | null): void => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

export const setUserId = (userId: string | null): void => {
  if (userId) {
    localStorage.setItem('user_id', userId);
  } else {
    localStorage.removeItem('user_id');
  }
};
