import { DispatchWithoutAction, useCallback, useEffect, useState } from "react";
import { useWebApp } from "../core";

const useExpand = (): readonly [boolean | undefined, DispatchWithoutAction] => {
  const WebApp = useWebApp();
  const [isExpanded, setIsExpanded] = useState(WebApp?.isExpanded);

  useEffect(() => {
    if (!WebApp) return;
    const handleEvent = (payload: { isStateStable: boolean }) => {
      if (payload.isStateStable) {
        setIsExpanded(WebApp.isExpanded);
      }
    };

    WebApp.onEvent("viewportChanged", handleEvent);
    return () => WebApp.offEvent("viewportChanged", handleEvent);
  }, [WebApp]);

  const handleExpand = useCallback(() => WebApp?.expand?.(), [WebApp]);

  return [isExpanded, handleExpand] as const;
};

export { useExpand };
