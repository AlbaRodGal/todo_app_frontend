import React, { useState } from "react";
import './App.css';
import Header from "../Header/Header";
import TaskCount from "../TaskCount/TaskCount";
import Task from "../Task/Task";
import AddNewTask from "../AddNewTask/AddNewTask";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[counter, setCounter] = useState(0);

  const [tasks, setTasks] = useState([
    { text: 'Homework', tag:'learning', urgent:true, completed: true, dueDate: "2020-04-01" },
    { text: 'Grocery', tag:'home',urgent: false, completed: false, dueDate: "2020-04-02" },
    { text: 'Buy a new mat', tag:'home', urgent: true, completed: true, dueDate: "2020-04-03" }
  ]);
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
              text={task.text} 
              tag={task.tag} 
              urgent={task.urgent} 
              completed={task.completed} 
              dueDate={task.dueDate}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
