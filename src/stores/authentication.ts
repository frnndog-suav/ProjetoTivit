import { create } from "zustand";
import { useShallow } from "zustand/shallow";

type TActions = {
  clear: () => void;
  setToken: (token: string) => void;
};

interface IAuthenticationStore {
  actions: TActions;
  accessToken: string | null;
}

const useAuthenticationStore = create<IAuthenticationStore>((set) => ({
  accessToken: null,
  actions: {
    clear: () => set(() => ({ accessToken: null })),
    setToken: (token: string) => set(() => ({ accessToken: token })),
  },
}));

export const useAuthenticationStoreActions = () =>
  useAuthenticationStore((state) => state.actions);

export const useAuthenticationStoreData = () =>
  useAuthenticationStore(
    useShallow(({ accessToken }) => ({
      accessToken,
    })),
  );
