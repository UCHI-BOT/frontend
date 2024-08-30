import { AuthProvider } from "@/providers/AuthProvider/AuthProvider";
import { useCloudStorage } from "@/lib/twa/hooks";
import { ACCESS_TOKEN_NAME } from "@/services/auth/storage.ts";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthenticatedLayout() {
  const navigate = useNavigate();
  const cloudStorage = useCloudStorage();

  useEffect(() => {
    const check = async () => {
      await cloudStorage
        .getItem(ACCESS_TOKEN_NAME)
        .catch(() => navigate("/welcome"))
        .then((res) => {
          if (!res || !res.at(0)) navigate("/welcome");
        });
    };
    check();
  }, []);

  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
