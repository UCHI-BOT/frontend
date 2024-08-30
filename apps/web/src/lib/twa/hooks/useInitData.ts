import { useWebApp } from "../core";

const useInitData = () => {
  const WebApp = useWebApp();

  return [WebApp?.initDataUnsafe, WebApp?.initData] as const;
};

export { useInitData };
