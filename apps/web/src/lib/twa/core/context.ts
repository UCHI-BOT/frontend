import WebApp from "@twa-dev/sdk";
import { createContext, MutableRefObject } from "react";

export const getWebAppFromGlobal = () =>
  typeof window !== "undefined" && WebApp ? WebApp : null;

export const webAppContext = createContext<
  ReturnType<typeof getWebAppFromGlobal>
>(getWebAppFromGlobal());

export type Options = {
  smoothButtonsTransition?: boolean;
  async?: boolean;
  smoothButtonsTransitionMs?: number;
};

export const DEFAULT_OPTIONS: Options = {
  smoothButtonsTransition: false,
  smoothButtonsTransitionMs: 10,
};

export const optionsContext = createContext<Options>(DEFAULT_OPTIONS);

type SystemContext = {
  MainButton: MutableRefObject<null | string>;
  BackButton: MutableRefObject<null | string>;
};

export const createSystemContextValue = () => ({
  MainButton: { current: null },
  BackButton: { current: null },
});

export const systemContext = createContext<SystemContext>(
  createSystemContextValue(),
);
