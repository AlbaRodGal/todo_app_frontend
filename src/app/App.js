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
    axios.put(`https://uu2xin8f44.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, { Completed: true })
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
      if (task.TaskId === id) {
        task.editingMode = true;
      }
      return task
    })
    setTasks(editingTasks);
  }

  const editDateMode = (id) => {
    const editingDate = tasks.map(task => {
      if (task.TaskId === id) {
        task.editingDate = true;
      }
      return task
    })
    setTasks(editingDate)
  }

  const editCategoryMode = (id) => {
    const editCat = tasks.map(task => {
      if (task.TaskId === id) {
        task.editingCategory = true;
      }
      return task
    })
    setTasks(editCat);
  }

  const editPriorityMode = (id) => {
    const editPriority = tasks.map(task => {
      if (task.TaskId === id) {
        task.editingPriority = true;
      }
      return task
    })
    setTasks(editPriority)
  }

  const defaultTextMode = (id, editText) => {
    axios.put(`https://uu2xin8f44.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, { Text: editText })
      .then(response => {
        const defaultTextView = tasks.map(task => {
          if (task.TaskId === id) {
            task.editingMode = false;
            task.Text = editText;
          }
          return task
        });
        setTasks(defaultTextView)
      })
      .catch(err => {
        console.log("Error", err)
      })
  }

  const defaultDateMode = (id, editDate) => {
    axios.put(`https://uu2xin8f44.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, { DueDate: editDate })
      .then(response => {
        const defaultDateView = tasks.map(task => {
          if (task.TaskId === id) {
            task.editingDate = false;
            task.DueDate = editDate;
          }
          return task
        });
        setTasks(defaultDateView)
      })
      .catch(err => {
        console.log("Error", err)
      })
  }

  const defaultCategoryMode = (id, editCategory) => {
    axios.put(`https://uu2xin8f44.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, { Category: editCategory })
      .then(response => {
        const defaultCategoryView = tasks.map(task => {
          if (task.TaskId === id) {
            task.editingCategory = false;
            task.Category = editCategory;
          }
          return task
        });
        setTasks(defaultCategoryView)
      })
      .catch(err => {
        console.log("Error", err)
      })
  }

  const defaultPriorityMode = (id, editPriority) => {
    axios.put(`https://uu2xin8f44.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, { Priority: editPriority })
      .then(response => {
        const defaultPriorityView = tasks.map(task => {
          if (task.TaskId === id) {
            task.editingPriority = false;
            task.Priority = editPriority;
          }
          return task
        });
        setTasks(defaultPriorityView)
      })
      .catch(err => {
        console.log("Error", err)
      })
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
