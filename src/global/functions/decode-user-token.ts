import { jwtDecode } from "jwt-decode";

export type TUserType = "admin" | "user";

export interface IToken {
  sub: TUserType;
  exp: number;
}

export const decodeUserToken = (token: string) => {
  try {
    const decoded = jwtDecode<IToken>(token);

    return decoded;
  } catch (error) {
    console.error("Token inválido ou corrompido:", error);
    return null;
  }
};
