import { useEffect, useState } from "react";
import { useWebApp } from "../core";
import { type ThemeParams } from "@twa-dev/types";

const useThemeParams: () => readonly [
  "light" | "dark" | undefined,
  ThemeParams,
] = () => {
  const WebApp = useWebApp();
  const [colorScheme, setColor] = useState<"light" | "dark" | undefined>(
    WebApp?.colorScheme,
  );
  const [themeParams, setThemeParams] = useState<ThemeParams>(
    WebApp?.themeParams || ({} as ThemeParams),
  );

  useEffect(() => {
    if (!WebApp) return;
    const eventHandler = () => {
      setColor(WebApp.colorScheme);
      setThemeParams(WebApp.themeParams);
    };

    WebApp.onEvent("themeChanged", eventHandler);
    return () => {
      WebApp.offEvent("themeChanged", eventHandler);
    };
  }, [WebApp]);

  return [colorScheme, themeParams] as const;
};

export { useThemeParams };
