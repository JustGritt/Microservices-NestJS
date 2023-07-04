/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";

export const protobufPackage = "payment";

export interface AuthParams {
  token: string;
}

export interface AuthResponse {
  success?: AuthSuccess | undefined;
  error?: AuthFail | undefined;
}

export interface AuthSuccess {
  user: User | undefined;
}

export interface AuthFail {
  errorMessage: string;
}

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface AuthService {
  validateUser(request: AuthParams): Observable<AuthResponse>;
}
