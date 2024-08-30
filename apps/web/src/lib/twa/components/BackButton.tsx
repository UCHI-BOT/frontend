import { useContext, useEffect, useId } from "react";
import {
  useWebApp,
  useSmoothButtonsTransition,
  systemContext,
} from "@/lib/twa/core";

/**
 * The props type of {@link BackButton | `BackButton`}.
 */
export interface BackButtonProps {
  /** The back button press event handler */
  onClick?: () => void;
}

const BackButton = ({ onClick }: BackButtonProps): null => {
  const system = useContext(systemContext);
  const buttonId = useId();
  const WebApp = useWebApp();
  const BackButton = WebApp?.BackButton;

  useEffect(() => {
    if (!onClick || !BackButton) {
      return;
    }

    BackButton.onClick(onClick);
    return () => {
      BackButton.offClick(onClick);
    };
  }, [onClick, BackButton]);

  useSmoothButtonsTransition({
    show: BackButton?.show,
    hide: BackButton?.hide,
    currentShowedIdRef: system.BackButton,
    id: buttonId,
  });

  return null;
};

export { BackButton };
