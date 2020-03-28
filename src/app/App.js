import React, { useState } from "react";
import './App.css';
import Header from "../Header/Header";
import TaskCount from "../TaskCount/TaskCount";
import Task from "../Task/Task";
import AddNewTask from "../AddNewTask/AddNewTask";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Click on the delete button
// Our app needs to know this happened -> Listen to the event
// Know which button was clicked
// Remove the relevant todo object from our state

function App() {
  const [counter, setCounter] = useState(0);

  const [tasks, setTasks] = useState([
    { text: 'Homework', tag: 'learning', urgent: true, completed: true, dueDate: "2020-04-01", id: 1 },
    { text: 'Grocery', tag: 'home', urgent: false, completed: false, dueDate: "2020-04-02", id: 2 },
    { text: 'Buy a new mat', tag: 'home', urgent: true, completed: true, dueDate: "2020-04-03", id: 3 }
  ]);

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id === id ? false : true)

    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <TaskCount count={tasks.length} />

        <div className="container">
          <AddNewTask />
        </div>

        <div className="container">
          {/* Passing a prop of text to each Task component */}
          {tasks.map(function (task) {
            return (
              <Task
                key={task.id}
                deleteTaskFunc={deleteTask}
                text={task.text}
                tag={task.tag}
                urgent={task.urgent}
                completed={task.completed}
                dueDate={task.dueDate}
                id={task.id}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
