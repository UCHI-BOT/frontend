import React from "react";
import { ChallengeScreenProps, ChallengeState } from "@/pages/(authenticated)/lesson/Challenge/Challenge.tsx";
import { ChallengeSubmit } from "@/pages/(authenticated)/lesson/Challenge/layout/ChallengeSubmit.tsx";
import { ChallengeHeading } from "@/pages/(authenticated)/lesson/Challenge/layout/ChallengeHeading.tsx";
import { Choice } from "@/models/Session.ts";
import { ChallengeMain } from "@/pages/(authenticated)/lesson/Challenge/layout/ChallengeMain.tsx";
import { useHapticFeedback } from "@/lib/twa/hooks";
import { ChoicesBig } from "@/pages/(authenticated)/lesson/Challenge/shared/Choices/ChoicesBig.tsx";
import { TextPrompt } from "@/pages/(authenticated)/lesson/Challenge/shared/Prompt/TextPrompt.tsx";

const MistakeChallenge: React.FC<ChallengeScreenProps> = ({ challenge, updateStats, next }) => {
  const [_, notification] = useHapticFeedback();
  const [choice, setChoice] = React.useState<Choice | null>(null);
  const [state, setState] = React.useState<ChallengeState>({ submitted: false, wrong: false });

  function onSubmit() {
    if (!choice) {
      return;
    }

    setState({
      submitted: true,
      wrong: !choice.isCorrect,
    });

    updateStats(choice.isCorrect);

    notification(choice.isCorrect ? "success" : "error");
  }

  const correctChoice = React.useMemo(() => {
    return challenge.choices?.filter((choice) => choice.isCorrect).at(0)?.text;
  }, [challenge.choices]);

  return (
    <>
      <ChallengeHeading challenge={challenge}>Найди ошибку в тексте</ChallengeHeading>
      <ChallengeMain>
        <TextPrompt prompt={challenge.prompt} />
        <ChoicesBig choices={challenge.choices} currentChoice={choice} setChoice={setChoice} state={state} />
      </ChallengeMain>
      <ChallengeSubmit
        onSubmit={onSubmit}
        challenge={challenge}
        next={next}
        disabled={!choice}
        state={state}
        correctText={correctChoice}
        explanation={challenge.explanation}
      />
    </>
  );
};

export { MistakeChallenge };
