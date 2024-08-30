import { Attribute } from "./types";
import WebApp from "@twa-dev/sdk";

const LIGHT_BG = "#FFFFFF";
const DARK_BG = "#0F0F0F";

interface ValueObject {
  [themeName: string]: string;
}

export const script = (
  attribute: Attribute,
  storageKey: string,
  defaultTheme: string,
  forcedTheme: string,
  themes: string[],
  value: ValueObject,
  enableSystem: boolean,
  enableColorScheme: boolean,
) => {
  const el = document.documentElement;
  const systemThemes = ["light", "dark"];
  const isClass = attribute === "class";
  const classes = isClass && value ? themes.map((t) => value[t] || t) : themes;

  function updateDOM(theme: string) {
    if (isClass) {
      el.classList.remove(...classes);
      el.classList.add(theme);
    } else {
      el.setAttribute(attribute, theme);
    }

    WebApp.setBackgroundColor(theme === "dark" ? DARK_BG : LIGHT_BG);
    WebApp.setHeaderColor(theme === "dark" ? DARK_BG : LIGHT_BG);

    setColorScheme(theme);
  }

  function setColorScheme(theme: string) {
    if (enableColorScheme && systemThemes.includes(theme)) {
      el.style.colorScheme = theme;
    }
  }

  function getSystemTheme() {
    return WebApp.colorScheme;
  }

  if (forcedTheme) {
    updateDOM(forcedTheme);
  } else {
    try {
      const themeName = localStorage.getItem(storageKey) || defaultTheme;
      const isSystem = enableSystem && themeName === "system";
      const theme = isSystem ? getSystemTheme() : themeName;
      updateDOM(theme);
    } catch (e) {
      //
    }
  }
};
