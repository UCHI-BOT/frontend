import pageStyles from "../Page.module.scss";
import { GreetingSection } from "./GreetingSection";
import styles from "./Home.module.scss";
import { LessonsSection } from "./LessonsSection";
import { WorkoutSection } from "./WorkoutSection";

export default function HomePage() {
  return (
    <div className={pageStyles.main}>
      <div className={styles.content}>
        <GreetingSection />
        <WorkoutSection />
        <LessonsSection />
      </div>
    </div>
  );
}
