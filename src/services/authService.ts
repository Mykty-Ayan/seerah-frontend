import request from './apiClient';
import {
  SignInRequest,
  SignUpResponse,
  SignUpRequest,
  JwtAuthenticationResponse,
  RefreshTokenRequest,
} from '../interfaces';

export const signUp = async (
  signUpRequest: SignUpRequest
): Promise<SignUpResponse> => {
  const response = await request({
    url: '/auth/sign-up',
    method: 'POST',
    data: signUpRequest,
    requiresAuth: false,
  });
  return response.data;
};

export const signIn = async (
  signInRequest: SignInRequest
): Promise<JwtAuthenticationResponse> => {
  const response = await request({
    url: '/auth/sign-in',
    method: 'POST',
    data: signInRequest,
    requiresAuth: false,
  });
  return response.data;
};

export const refreshToken = async (
  refreshTokenRequest: RefreshTokenRequest
): Promise<string> => {
  const response = await request({
    url: '/auth/refresh-token',
    method: 'POST',
    data: refreshTokenRequest,
    requiresAuth: false,
  });
  return response.data.access; 
};
