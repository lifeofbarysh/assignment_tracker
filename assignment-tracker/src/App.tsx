import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

interface assignmentInterface {
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<assignmentInterface[]>([]);

  const addAssignment = (title: string) => {
    const newAssignment = { title, completed: false };
    const newAssignments = [...assignments, newAssignment];
    setAssignments(newAssignments);
  };

  const removeAssignment = (index: number) => {
    const updatedAssignments = [...assignments];

    const removedAssignment = updatedAssignments.splice(index, 1)[0];

    if (removedAssignment.completed) {
      setAssignments(updatedAssignments);
    } else {
      setAssignments(updatedAssignments);
    }
  };

  const toggleCompleted = (index: number) => {
    const updatedAssignments = [...assignments];
    updatedAssignments[index].completed = !updatedAssignments[index].completed;

    setAssignments(updatedAssignments);
  };

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments
        assignments={assignments}
        removeAssignment={removeAssignment}
        onToggleCompleted={toggleCompleted}
      />
    </>
  );
}

export default App;
