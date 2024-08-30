import axios from "axios";

const authClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/${import.meta.env.VITE_API_VERSION}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { authClient };
