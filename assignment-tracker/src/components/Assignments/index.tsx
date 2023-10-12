import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface AssignmentsProps {
  assignments: { title: string; completed: boolean }[];
  removeAssignment: (index: number) => void;
  onToggleCompleted: (index: number) => void;
}

export function Assignments({
  assignments,
  removeAssignment,
  onToggleCompleted,
}: AssignmentsProps) {
  const numAssignments = assignments.length;
  const numCompletedAssignments = assignments.filter(
    (assignment) => assignment.completed
  ).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{numAssignments}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{`${numCompletedAssignments} of ${numAssignments}`}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment.title}
            completed={assignment.completed}
            onRemove={() => removeAssignment(index)}
            onToggleCompleted={() => onToggleCompleted(index)}
          />
        ))}
      </div>
    </section>
  );
}
