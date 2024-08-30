import { LoaderSpinner } from "@repo/ui";

export default function WithTabbarLayoutLoading() {
  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoaderSpinner size={25} />
    </div>
  );
}
