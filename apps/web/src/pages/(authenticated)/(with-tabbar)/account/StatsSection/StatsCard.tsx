import React, { FC } from "react";
import styles from "./StatsSection.module.scss";
import cn from "classnames";

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: string;
  icon: React.ReactNode;
}

const StatsCard: FC<StatsCardProps> = ({
  value,
  label,
  icon,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      <div className={styles.card__emoji}>{icon}</div>
      <div className={styles.card__content}>
        <h3 className={styles.card__content__value}>{value}</h3>
        <p className={styles.card__content__label}>{label}</p>
      </div>
    </div>
  );
};

export { StatsCard };
