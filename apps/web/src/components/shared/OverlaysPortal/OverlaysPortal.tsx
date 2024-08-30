import * as Portal from "@radix-ui/react-portal";

const OverlaysPortal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const container = document.getElementById("overlays");
  return (
    <Portal.Root container={container} asChild>
      {children}
    </Portal.Root>
  );
};

export { OverlaysPortal };
