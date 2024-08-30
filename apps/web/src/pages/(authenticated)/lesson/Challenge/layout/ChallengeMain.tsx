import React from "react";
import styles from "../Challenge.module.scss";

const ChallengeMain: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export { ChallengeMain };
