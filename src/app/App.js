import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Header from "../Header/Header";
import TaskCount from "../TaskCount/TaskCount";
import Task from "../Task/Task";
import AddNewTask from "../AddNewTask/AddNewTask";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("https://uu2xin8f44.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then(response => {
        console.log("Success", response.data)
        setTasks(response.data);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, [])

  const AddTask = (text, date, category, priority) => {
    axios.post("https://uu2xin8f44.execute-api.eu-west-1.amazonaws.com/dev/tasks", {
      Text: text,
      DueDate: date,
      Category: category,
      Priority: priority
    })
      .then(response => {
        const newTask = response.data;
        if (newTask.Text !== "" && newTask.DueDate !== "" && newTask.Category !== "" && newTask.Priority !== "") {
          const newTasks = [...tasks, newTask]
          setTasks(newTasks)
        }
      })
      .catch(err => {
        console.log("Error", err)
      });
  }


  const completeTask = (id) => {
    axios.put(`https://uu2xin8f44.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, {Completed: false})
      .then(response => {
        const completedTask = tasks.map(task => {
          if (task.TaskId === id && task.Completed !== 1) {
            task.Completed = 1
          } else if (task.TaskId === id && task.Completed === 1) {
            task.Completed = 0
          }
          return task;
        })
        setTasks(completedTask);
      })
      .catch(err => {
        console.log("Error", err)
      });
  }

  const deleteTask = (id) => {
    axios.delete(`https://uu2xin8f44.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
      .then(response => {
        const filteredTasks = tasks.filter(task => task.TaskId !== id);
        setTasks(filteredTasks);
      })
      .catch(err => {
        console.log("API error", err);
      });
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
      if (task.id === id) {
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
      if (task.id === id) {
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
                key={task.TaskId}
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
                text={task.Text}
                category={task.Category}
                priority={task.Priority}
                completed={task.Completed}
                dueDate={task.DueDate}
                id={task.TaskId}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
