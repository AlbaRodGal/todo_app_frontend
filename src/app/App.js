import React, { useState } from "react";
import './App.css';
import Header from "../Header/Header";
import TaskCount from "../TaskCount/TaskCount";
import Task from "../Task/Task";
import AddNewTask from "../AddNewTask/AddNewTask";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // //0 - this number is 1 piece of state I want to keep track of
  // let [counter, setCounter] = useState(0);//Array descruturing

  // function increaseCounterBy1() {
  //   setCounter(counter + 1)
  // };
  // function decreaseCounterBy1() {
  //   if (counter > 0) {
  //     setCounter(counter - 1)
  //   }
  // };

  const [tasks, setTasks] = useState([
    { text: 'Do the dishes', urgent:true, completed: true, dueDate: "2020 - 04 - 01" },
    { text: 'Walk the dog', urgent: false, completed: false, dueDate: "2020 - 04 - 02" },
    { text: 'Buy a new mat', urgent: true, completed: true, dueDate: "2020 - 04 - 03" }
  ]);
  return (
    <div className="App">
      <Header />
      <main>
        {/* <h4>{counter}</h4> */}
        {/* <button onClick={increaseCounterBy1}>Increase counter</button>
        <button onClick={decreaseCounterBy1}>Decrease counter</button> */}

        <TaskCount count={tasks.length} />
        <div className="container">
          {/* Passing a prop of text to each Task component */}
          {tasks.map(function (task) {
            return <Task text={task.text} urgent={task.urgent} completed={task.completed} dueDate={task.dueDate}/>
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
