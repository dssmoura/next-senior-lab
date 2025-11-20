export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
}
