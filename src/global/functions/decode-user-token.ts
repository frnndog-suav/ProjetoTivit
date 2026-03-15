import type { TUserType } from "@global/types/user-type";
import { jwtDecode } from "jwt-decode";

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
