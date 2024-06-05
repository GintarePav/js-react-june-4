import ToDoItem from "../toDoItem/ToDoItem";
import { useState } from "react";
import AddTask from "../taskAddition/AddTask";
import TaskSearch from "../taskSearch/TaskSearch";

const Main = () => {
  const [submit, setSubmit] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = () => {
    setSubmit(true);
  };
  const handleTaskData = (data) => {
    setTasks((prevData) => {
      return [...prevData, data];
    });
    console.log(tasks);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <section>
        <h2>To-do List</h2>
        <button onClick={submitHandler} style={{ marginBottom: "10px" }}>
          Add task
        </button>
        {submit && <AddTask onSave={handleTaskData} />}
        {tasks.length > 0 && <TaskSearch onSearch={handleInputChange} value={searchTerm} />}
      </section>
      <main>
        {filteredTasks.map((task) => (
          <ToDoItem
            key={task.id}
            name={task.name}
            description={task.description}
            priority={task.priority}
          />
        ))}
      </main>
    </>
  );
};

export default Main;
