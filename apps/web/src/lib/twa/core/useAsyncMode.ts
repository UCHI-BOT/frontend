import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

const useAsyncMode = (enabled: boolean) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    if (WebApp) {
      setIsLoaded(true);
      return;
    }

    const nativeProxyPostHandle =
      typeof window !== "undefined" &&
      window.TelegramWebviewProxy &&
      window.TelegramWebviewProxy.postEvent;

    if (window.TelegramWebviewProxy) {
      window.TelegramWebviewProxy.postEvent = (...args: any[]) => {
        nativeProxyPostHandle?.(...args);

        if (WebApp) {
          setIsLoaded(true);
          window.TelegramWebviewProxy.postEvent = nativeProxyPostHandle;
        }
      };
    } else {
      window.TelegramWebviewProxy = {
        postEvent: (...args: any[]) => {
          nativeProxyPostHandle?.(...args);
          if (WebApp) {
            setIsLoaded(true);
            delete window.TelegramWebviewProxy;
          }
        },
      };
    }
  }, [enabled]);

  return isLoaded;
};

export { useAsyncMode };
