import { useContext } from "react";
import { webAppContext } from "./context";
import WebApp from "@twa-dev/sdk";

/**
 * @private
 * @ignore
 */
const useWebApp = (): typeof WebApp | null => {
  return useContext(webAppContext);
};

export { useWebApp };
