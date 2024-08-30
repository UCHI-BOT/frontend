import { motion } from "framer-motion";
import styles from "./Lesson.module.scss";

const LessonPageLoading: React.FC<{ initial: boolean }> = ({ initial }) => {
  return (
    <motion.div
      initial={initial ? { opacity: 0 } : undefined}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.3 } }}
      className={styles.loading}
    >
      <h3>Загружаем</h3>
    </motion.div>
  );
};

export { LessonPageLoading };
