import { useWebApp } from "../core";

const useInitData = () => {
  const WebApp = useWebApp();


  let initdata = WebApp?.initDataUnsafe;

  console.log(initdata)

  if (initdata) {
    // const decodedQuery = decodeURIComponent(initdata);
    // console.log('Decoded Query:', decodedQuery);
    const newObject = {
      query: `user={"id":${initdata.user.id},"first_name":"${initdata.user.first_name}","last_name":"${initdata.user.last_name}","username":"${initdata.user.username}","language_code":"${initdata.user.language_code}","allows_write_to_pm":${initdata.user.allows_write_to_pm}}&auth_date=${initdata.auth_date}&hash=${initdata.hash}`,
      username: initdata.user.username
    };
    // console.log(newObject);
    return newObject
  }

  // return [WebApp?.initDataUnsafe, WebApp?.initData] as const;
};

export { useInitData };
