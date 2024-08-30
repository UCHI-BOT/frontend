import { FC } from "react";
import { DisplayToken } from "@/models/Session.ts";

import styles from "./GapFillTokens.module.scss";

interface GapFillTokensProps {
  displayTokens?: DisplayToken[];
  isRight?: boolean;
}

const GapFillTokens: FC<GapFillTokensProps> = ({ displayTokens, isRight = false }) => {
  if (!displayTokens) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tokens}>
        {displayTokens.map((token, i) => {
          if (!token.isBlank) {
            return <span key={i}>{token.text}</span>;
          }

          if (isRight) {
            return (
              <span key={i} className={styles.token_right}>
                {token.text}
              </span>
            );
          }

          return <span key={i} className={styles.line} />;
        })}
      </div>
    </div>
  );
};

export { GapFillTokens };
