import React from "react";
import './App.css';
import Header from "../Header/Header";
import TaskCount from "../TaskCount/TaskCount";
import Task from "../Task/Task";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <TaskCount />
      <div>
        {/* Passing a prop of text to each Task component */}
        <Task text="Grocery" urgent={true} completed={false} />
        <Task text="Homework" urgent={true} completed={true}/>
        <Task text="Buy new mat" urgent={false} completed={false}/>
        <Task text="Buy new book" urgent={false} completed={true}/>
      </div>
      </main>
    </div>
  );
}

export default App;
