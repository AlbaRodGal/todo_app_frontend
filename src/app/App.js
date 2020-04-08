import React, { useState } from "react";
import './App.css';
import Header from "../Header/Header";
import TaskCount from "../TaskCount/TaskCount";
import Task from "../Task/Task";
import AddNewTask from "../AddNewTask/AddNewTask";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import { setDefaultLocale } from "react-datepicker";


function App() {

  const [tasks, setTasks] = useState([
    { text: 'Homework', category: 'learning', priority: 'High', completed: false, dueDate: "2020-04-01", id: 1},
    { text: 'Grocery', category: 'home', priority: 'Medium', completed: false, dueDate: "2020-04-02", id: 2},
    { text: 'Buy a new mat', category: 'home', priority: 'High', completed: false, dueDate: "2020-04-03", id: 3 }
  ]);
  
  const AddTask = (text, date, category, priority, completed) => {
    const newTask = {
      text: text,
      dueDate: date,
      category: category,
      priority: priority,
      completed:completed,
      id: uuidv4()
    }

    const newTasks = [...tasks, newTask]
    setTasks(newTasks);
  }

  const completeTask = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id && task.completed !== true) {
        task.completed = true
      } else if (task.id === id && task.completed === true) {
        task.completed = false
      }
      return task;
    })
    setTasks(newTasks);
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);

    setTasks(filteredTasks);
  }

  const editTextTask = (id) => {
    const editingTasks = tasks.map(task => {
      if (task.id === id) {
        task.editing = true;
      }
      return task
    })
    setTasks(editingTasks);
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
                editTextTaskFunc={editTextTask}
                completeTaskFunc={completeTask}
                text={task.text}
                category={task.category}
                priority={task.priority}
                completed={task.completed}
                editing={task.editing}
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
