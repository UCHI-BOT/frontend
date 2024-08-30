import { useEffect } from "react";
import { useWebApp } from "@/lib/twa/core";

/**
 * The props type of {@link SettingsButton | `SettingsButton`}.
 */
export interface SettingsButtonProps {
  /** The back button press event handler */
  onClick?: () => void;
}

const SettingsButton = ({ onClick }: SettingsButtonProps): null => {
  const WebApp = useWebApp();
  const SettingsButton = WebApp?.SettingsButton;

  useEffect(() => {
    if (!onClick || !SettingsButton) {
      return;
    }

    SettingsButton.onClick(onClick);
    return () => {
      SettingsButton.offClick(onClick);
    };
  }, [onClick, SettingsButton]);

  return null;
};

export { SettingsButton };
