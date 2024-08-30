import React from "react";
import { ChallengeScreenProps, ChallengeState } from "@/pages/(authenticated)/lesson/Challenge/Challenge.tsx";
import { ChallengeSubmit } from "@/pages/(authenticated)/lesson/Challenge/layout/ChallengeSubmit.tsx";
import { ChallengeHeading } from "@/pages/(authenticated)/lesson/Challenge/layout/ChallengeHeading.tsx";
import { ChoicesBig } from "@/pages/(authenticated)/lesson/Challenge/shared/Choices/ChoicesBig.tsx";
import { Choice } from "@/models/Session.ts";
import { ChallengeMain } from "@/pages/(authenticated)/lesson/Challenge/layout/ChallengeMain.tsx";
import { GapFillTokens } from "@/pages/(authenticated)/lesson/Challenge/shared/Tokens/GapFillTokens.tsx";
import { useHapticFeedback } from "@/lib/twa/hooks";

const GapFillChallenge: React.FC<ChallengeScreenProps> = ({ challenge, updateStats, next }) => {
  const [, notification] = useHapticFeedback();
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
      <ChallengeHeading challenge={challenge}>Заполни пропуск</ChallengeHeading>
      <ChallengeMain>
        <GapFillTokens displayTokens={challenge.displayTokens} isRight={state.submitted && !state.wrong} />
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

export { GapFillChallenge };
