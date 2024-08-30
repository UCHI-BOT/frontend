import { TabBar } from "@/components/layout/TabBar";
import { Outlet, useNavigate } from "react-router-dom";
import pageStyles from "./Page.module.scss";
import cn from "classnames";
import { SettingsButton } from "@/lib/twa/components/SettingsButton";
import { Suspense } from "react";
import WithTabbarLayoutLoading from "./loading";

export default function WithTabbarLayout() {
  const navigate = useNavigate();

  return (
    <>
      <TabBar />
      <Suspense fallback={<WithTabbarLayoutLoading />}>
        <div className={cn(pageStyles.content, "page")}>
          <Outlet />
        </div>
      </Suspense>
      <SettingsButton onClick={() => navigate("/settings")} />
    </>
  );
}
