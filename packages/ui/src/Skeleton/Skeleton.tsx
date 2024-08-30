import cn from "classnames";
import React from "react";
import styles from "./Skeleton.module.scss";

const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn(className, styles.skeleton)} ref={ref} {...props} />
  );
});

export { Skeleton };
