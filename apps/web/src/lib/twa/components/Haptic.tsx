import React, { HTMLAttributes, useCallback } from "react";
import { Slot } from "@radix-ui/react-slot";
import { useHapticFeedback } from "@/lib/twa/hooks";

type ImpactValue = "light" | "medium" | "heavy" | "rigid" | "soft";
type NotificationValue = "error" | "success" | "warning";

interface HapticProps<T extends "impact" | "notification"> extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  type: T;
  value: [T] extends ["impact"] ? ImpactValue : NotificationValue;
  asChild?: boolean;
  event?: "onTouchStart" | "onTouchEnd" | "onClick";
}

function Haptic<T extends "impact" | "notification">({
  type,
  value,
  asChild,
  onTouchStart,
  onTouchEnd,
  onClick,
  event = "onClick",
  disabled = false,
  ...props
}: HapticProps<T>) {
  const [impactOccurred, notificationOccurred] = useHapticFeedback();

  const onEventFunc = useCallback(
    (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
      switch (type) {
        case "impact":
          impactOccurred(value as ImpactValue);
          break;
        case "notification":
          notificationOccurred(value as NotificationValue);
      }
      if (event === "onTouchStart") onTouchStart?.(e as React.TouchEvent<HTMLDivElement>);
      if (event === "onTouchEnd") onTouchEnd?.(e as React.TouchEvent<HTMLDivElement>);
      if (event === "onClick") onClick?.(e as React.MouseEvent<HTMLDivElement>);
    },
    [type, value],
  );

  const Comp = asChild ? Slot : "div";

  if (disabled) {
    return <Comp {...props} />;
  }

  return (
    <Comp
      onTouchStart={event === "onTouchStart" ? onEventFunc : undefined}
      onTouchEnd={event === "onTouchEnd" ? onEventFunc : undefined}
      onClick={event === "onClick" ? onEventFunc : undefined}
      {...props}
    />
  );
}

export { Haptic };
