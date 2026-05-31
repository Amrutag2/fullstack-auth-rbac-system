import api from "../api/axios";

import type {
  RegisterRequest,
  LoginRequest,
  LoginResponse,
} from "../types/auth";

export const registerUser = async (data: RegisterRequest) => {

  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;
};

export const loginUser = async (
  data: LoginRequest
): Promise<LoginResponse> => {

  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
};