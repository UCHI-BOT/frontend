import React from "react";
import { Choice } from "@/models/Session.ts";
import { ChallengeState } from "@/pages/(authenticated)/lesson/Challenge/Challenge.tsx";
import styles from "./ChoicesAccent.module.scss";
import cn from "classnames";
import { Haptic } from "@/lib/twa/components/Haptic.tsx";

interface ChoicesAccentProps {
  choices?: Choice[];

  currentChoice: Choice | null;
  setChoice: React.Dispatch<React.SetStateAction<Choice | null>>;

  state?: ChallengeState;
}

interface ChoiceAccentProps {
  choice?: Choice;

  onSelect?: () => void;

  isSelected?: boolean;
  state?: ChallengeState;
}

const ChoicesAccent: React.FC<ChoicesAccentProps> = ({ choices, currentChoice, setChoice, state }) => {
  if (!choices) {
    return null;
  }

  return (
    <div className={styles.choices}>
      {choices.map((choice, i) => (
        <ChoiceAccent
          key={`${choice.text}-${i}`}
          choice={choice}
          onSelect={!state?.submitted ? () => setChoice(choice) : undefined}
          isSelected={choice === currentChoice}
          state={state}
        />
      ))}
    </div>
  );
};

const ChoiceAccent: React.FC<ChoiceAccentProps> = ({ choice, onSelect, state, isSelected }) => {
  return (
    <Haptic type={"impact"} value={"medium"} disabled={state?.submitted} asChild>
      <div
        className={cn(styles.choice, {
          [styles["choice_not-submitted"]!]: !state?.submitted,
          [styles.choice_selected!]: isSelected,
          [styles.choice_right!]: isSelected && state?.submitted && !state?.wrong,
        })}
        role="radio"
        onClick={onSelect}
      >
        <span className={styles.choice__text}>{choice?.text}</span>
        {isSelected && (
          <div className={styles.choice__accent}>
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0L3.05825 11H0L2.32767 0H7Z" />
            </svg>
          </div>
        )}
      </div>
    </Haptic>
  );
};

export { ChoicesAccent, ChoiceAccent };
