import request from './apiClient';
import {
  ISignInRequest,
  SignUpResponse,
  ISignUpRequest,
  IJwtAuthenticationResponse,
  IRefreshTokenRequest,
} from '../interfaces';

export const signUp = async (
  signUpRequest: ISignUpRequest
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
  signInRequest: ISignInRequest
): Promise<IJwtAuthenticationResponse> => {
  const response = await request({
    url: '/auth/sign-in',
    method: 'POST',
    data: signInRequest,
    requiresAuth: false,
  });
  return response.data;
};

export const refreshToken = async (
  refreshTokenRequest: IRefreshTokenRequest
): Promise<string> => {
  const response = await request({
    url: '/auth/refresh-token',
    method: 'POST',
    data: refreshTokenRequest,
    requiresAuth: false,
  });
  return response.data.access; 
};
