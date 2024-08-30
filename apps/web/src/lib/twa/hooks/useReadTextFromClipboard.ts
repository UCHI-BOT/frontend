import { useCallback } from "react";
import { useWebApp } from "../core";

/**
 * This function provided Promise function that read text from clipboard
 * @return {Promise<string>}
 */
export type ReadTextFromClipboardFunction = () => Promise<string>;

const useReadTextFromClipboard = (): ReadTextFromClipboardFunction => {
  const WebApp = useWebApp();

  return useCallback(
    () =>
      new Promise((resolve) => {
        WebApp?.readTextFromClipboard?.(resolve);
      }),
    [WebApp],
  );
};

export { useReadTextFromClipboard };
