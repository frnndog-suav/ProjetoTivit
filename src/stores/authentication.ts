import { decodeUserToken, type IToken } from "src/global/decode-user-token";
import { create } from "zustand";

type TActions = {
  clear: () => void;
  setToken: (token: string) => void;
};

interface IAuthenticationStore {
  actions: TActions;
  token: IToken | null;
}

const useAuthenticationStore = create<IAuthenticationStore>((set) => ({
  token: null,
  actions: {
    clear: () => set(() => ({ token: null })),
    setToken: (token: string) => set(() => ({ token: decodeUserToken(token) })),
  },
}));

export const useAuthenticationStoreActions = () =>
  useAuthenticationStore((state) => state.actions);

export const useAuthenticationStoreToken = () =>
  useAuthenticationStore((state) => state.token);
