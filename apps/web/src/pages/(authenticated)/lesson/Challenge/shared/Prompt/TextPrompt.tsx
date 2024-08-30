import React from "react";
import styles from "./TextPrompt.module.scss";

interface TextPromptProps {
  prompt?: string;
}

const TextPrompt: React.FC<TextPromptProps> = ({ prompt }) => {
  if (!prompt) {
    return null;
  }

  return (
    <div className={styles.prompt}>
      <p className={styles.prompt__text}>{prompt}</p>
    </div>
  );
};

export { TextPrompt };
