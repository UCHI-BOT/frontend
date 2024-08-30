import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import styles from "./Button.module.scss";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.button_primary,
      secondary: styles.button_secondary,
    },
    theme: {
      default: {},
      destructive: {},
    },
    disabled: {
      true: styles.button_disabled,
      false: {},
    },
  },
  defaultVariants: {
    variant: "primary",
    theme: "default",
  },
});

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp ref={ref} className={buttonVariants({ variant, disabled, className })} disabled={disabled} {...props} />
    );
  },
);

export { Button, buttonVariants };
