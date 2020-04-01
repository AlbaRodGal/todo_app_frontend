import React, { useState } from "react";
import './App.css';
import Header from "../Header/Header";
import TaskCount from "../TaskCount/TaskCount";
import Task from "../Task/Task";
import AddNewTask from "../AddNewTask/AddNewTask";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../Button/Button";


function App() {
  const [counter, setCounter] = useState(0);

  const [tasks, setTasks] = useState([
    { text: 'Homework', category: 'learning', priority: 'High', completed: false, dueDate: "2020-04-01", id: 1 },
    { text: 'Grocery', category: 'home', priority: 'Medium', completed: false, dueDate: "2020-04-02", id: 2 },
    { text: 'Buy a new mat', category: 'home', priority: 'High', completed: false, dueDate: "2020-04-03", id: 3 }
  ]);

  const [priorities, setPriorities] = useState([
    {level:"High", style: <Button buttonStyle={"btn--high--solid"} />},
    {level: "Medium", style: <Button buttonStyle={"btn--warning--solid"} />},
    {level: "Low", style: <Button buttonStyle={"btn--low--solid"} />}
    ])

  const prioritiesStyling = (task, priority) => {
    const prioStyling = Object.priorities.filter(function(level) {
         task['priority'].includes(priorities['level'])? true : false
     })
     setPriorities(prioStyling)
 }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);

    setTasks(filteredTasks);
  }
  const completeTask = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = true
      }
      return task;
    })
    setTasks(newTasks);
  }

 

  const AddTask = (text, date, category, priority) => {
    const newTask = {
      text: text,
      dueDate: date,
      category: category,
      priority: priority,
      id: Math.random() * 1000
    }

    const newTasks = [...tasks, newTask]
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <TaskCount count={tasks.length} />

        <div className="container">
          <AddNewTask AddTaskFunc={AddTask} />
        </div>

        <div className="container">
          {/* Passing a prop of text to each Task component */}
          {tasks.map(function (task) {
            return (
              <Task
                key={task.id}
                deleteTaskFunc={deleteTask}
                completeTaskFunc={completeTask}
                text={task.text}
                category={task.category}
                priority={task.priority}
                prioritiesStylingFunc={prioritiesStyling}
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
