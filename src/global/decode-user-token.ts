import { jwtDecode } from "jwt-decode";

interface IToken {
  sub: string;
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
