import React, { useState, useReducer } from "react";
import './App.css';
import Header from "../Header/Header";
import TaskCount from "../TaskCount/TaskCount";
import Task from "../Task/Task";
import AddNewTask from "../AddNewTask/AddNewTask";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState([
    { text: 'Homework', category: 'learning', priority: 'High', completed: false, dueDate: "2020-04-01", id: 1 },
    { text: 'Grocery', category: 'home', priority: 'Medium', completed: false, dueDate: "2020-04-02", id: 2 },
    { text: 'Buy a new mat', category: 'home', priority: 'High', completed: false, dueDate: "2020-04-03", id: 3 }
  ]);

  const AddTask = (text, date, category, priority) => {
    const newTask = {
      text: text,
      dueDate: date,
      category: category,
      priority: priority,
      id: uuidv4()
    }
    if (newTask.text !== "" && newTask.date !== "" && newTask.category !== "" && newTask.priority !== "") {
      const newTasks = [...tasks, newTask]
      setTasks(newTasks);
    }
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

  const editTextMode = (id) => {
    const editingTasks = tasks.map(task => {
      if (task.id === id) {
        task.editingMode = true;
      }
      return task
    })
    setTasks(editingTasks);
  }
  const editDateMode = (id) => {
    const editingDate = tasks.map(task => {
      if (task.id === id) {
        task.editingDate = true;
      }
      return task
    })
    setTasks(editingDate)
  }
  const editCategoryMode = (id) => {
    const editCat = tasks.map(task => {
      if (task.id === id) {
        task.editingCategory = true;
      }
      return task
    })
    setTasks(editCat);
  }

  const editPriorityMode = (id) => {
    const editPriority = tasks.map(task => {
      if(task.id === id){
        task.editingPriority = true;
      }
      return task
    })
    setTasks(editPriority)
  }

  const defaultTextMode = (id, editText) => {
    const defaultTextView = tasks.map(task => {
      if (task.id === id) {
        task.editingMode = false;
        task.text = editText;

      }
      return task
    });
    setTasks(defaultTextView)
  }

  const defaultDateMode = (id, editDate) => {
    const defaultDateView = tasks.map(task => {
      if (task.id === id) {
        task.editingDate = false;
        task.dueDate = editDate;

      }
      return task
    });
    setTasks(defaultDateView)
  }

  const defaultCategoryMode = (id, editCategory) => {
    const defaultCategoryView = tasks.map(task => {
      if (task.id === id) {
        task.editingCategory = false;
        task.category = editCategory;
      }
      return task
    });
    setTasks(defaultCategoryView)
  }

  const defaultPriorityMode = (id, editPriority) => {
    const defaultPriorityView = tasks.map(task => {
      if(task.id === id){
        task.editingPriority = false;
        task.priority = editPriority;
      }
      return task
    });
    setTasks(defaultPriorityView)
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
                editTextModeFunc={editTextMode}
                editModeDateFunc={editDateMode}
                editCategoryFunc={editCategoryMode}
                editPriorityFunc={editPriorityMode}
                defaultTextModeFunc={defaultTextMode}
                defaultDateModeFunc={defaultDateMode}
                defaultCategoryModeFunc={defaultCategoryMode}
                defaultPriorityModeFunc={defaultPriorityMode}
                editingMode={task.editingMode}
                editingDate={task.editingDate}
                editingCategory={task.editingCategory}
                editingPriority={task.editingPriority}
                completeTaskFunc={completeTask}
                text={task.text}
                category={task.category}
                priority={task.priority}
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
