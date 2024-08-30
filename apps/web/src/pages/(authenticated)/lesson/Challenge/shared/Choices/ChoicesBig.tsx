import { Choice } from "@/models/Session.ts";
import React from "react";
import cn from "classnames";

import styles from "./ChoicesBig.module.scss";
import { Haptic } from "@/lib/twa/components/Haptic.tsx";
import { ChallengeState } from "@/pages/(authenticated)/lesson/Challenge/Challenge.tsx";

interface ChoicesBigProps {
  choices?: Choice[];

  currentChoice: Choice | null;
  setChoice: React.Dispatch<React.SetStateAction<Choice | null>>;

  state?: ChallengeState;
}

interface ChoiceBigProps {
  text: string;
  isSelected: boolean;
  isRight?: boolean;
  onSelect?: () => void;
  state?: ChallengeState;
}

const ChoicesBig: React.FC<ChoicesBigProps> = ({ choices, currentChoice, setChoice, state }) => {
  if (!choices) {
    return null;
  }

  return (
    <div className={cn(styles.choices)}>
      {choices.map((choice) => (
        <ChoiceBig
          key={choice.text}
          text={choice.text}
          isSelected={currentChoice === choice}
          onSelect={!state?.submitted ? () => setChoice(choice) : undefined}
          state={state}
          isRight={choice === currentChoice && state?.submitted && !state?.wrong}
        />
      ))}
    </div>
  );
};

const ChoiceBig: React.FC<ChoiceBigProps> = ({ text, isSelected, isRight, state, onSelect }) => {
  return (
    <Haptic type={"impact"} value={"medium"} disabled={state?.submitted} asChild>
      <div
        role={"radio"}
        onClick={onSelect}
        className={cn(styles.choice, {
          [styles["choice_not-submitted"]!]: !state?.submitted,
          [styles.choice_selected!]: isSelected,
          [styles.choice_right!]: isRight,
        })}
      >
        <span className={styles.choice__text}>{text}</span>
      </div>
    </Haptic>
  );
};

export { ChoicesBig, ChoiceBig };
