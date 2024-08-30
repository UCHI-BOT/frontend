import { useCallback } from "react";
import { useWebApp } from "../core";
import { PopupParams } from "@twa-dev/types";

const useShowPopup = () => {
  const WebApp = useWebApp();

  return useCallback(
    (params: PopupParams) =>
      new Promise((resolve, reject) => {
        try {
          WebApp?.showPopup?.(params, (id?: string) => {
            resolve(id);
          });
        } catch (e) {
          reject(e);
        }
      }),
    [WebApp],
  );
};

export { useShowPopup };
