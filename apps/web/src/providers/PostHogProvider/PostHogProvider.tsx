import { PostHogProvider as PostHogProviderLegacy } from "posthog-js/react";
import { FC, PropsWithChildren } from "react";
import { PostHogConfig } from "posthog-js";

const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const apiHost = import.meta.env.VITE_PUBLIC_POSTHOG_API_HOST;
const uiHost = import.meta.env.VITE_PUBLIC_POSTHOG_UI_HOST;

const options: Partial<PostHogConfig> = {
  api_host: apiHost,
  ui_host: uiHost,
  person_profiles: "identified_only",
};

const PostHogProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PostHogProviderLegacy apiKey={apiKey} options={options}>
      {children}
    </PostHogProviderLegacy>
  );
};

export { PostHogProvider };
