import styles from "./assignment.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

interface AssignmentProps {
  title: string;
  onRemove: () => void;
  onToggleCompleted: () => void;
  completed: boolean;
}

export function Assignment({
  title,
  onRemove,
  onToggleCompleted,
  completed,
}: AssignmentProps) {
  return (
    <div
      className={`${styles.assignment} ${completed ? styles.completed : ""}`}
    >
      {completed ? (
        <BsFillCheckCircleFill
          size={18}
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            color: "#8284fa",
          }}
          onClick={onToggleCompleted}
        />
      ) : (
        <button className={styles.checkContainer} onClick={onToggleCompleted}>
          <div className={styles.checkbox}></div>
        </button>
      )}

      <p className={completed ? styles.textCompleted : ""}>{title}</p>

      <button className={styles.deleteButton} onClick={onRemove}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
