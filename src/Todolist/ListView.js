import React, { useEffect, useState } from "react";
import "./ListView.css";
import UpdateView from "../UpdateView/UpdateView";
import Todo from "../Todo.json";

function ListView() {
  const [show, setShow] = useState(false);
  const [toDoList, setToDoList] = useState([]);
  const [inProgress, setinProgress] = useState([]);
  const [done, setdone] = useState([]);

  useEffect(() => { 
    const Todolist  = Todo.filter((e) => e.status === "ToDo");
    setToDoList(Todolist);
     const inProgress  = Todo.filter((e) => e.status === "In-Progress");
    setinProgress(inProgress);
     const done  = Todo.filter((e) => e.status === "Done");
    setdone(done);
  }, []);

  return (
    <div>
      {show ? (
        <UpdateView />
      ) : (
        <div class="main_animation">
          <div class="header">
            <img src="logo2.png" height="50px" />
            &nbsp;&nbsp;
            <h1>TO DO LIST</h1>
          </div>
          <div class="btnCreate">
            <button onClick={() => setShow(true)}>CREATE </button>
          </div>
          <div className="main_div">
            <div className="center_div">
              <br />
              <h1 class="header"> To Do List</h1>
              <br />
              <ul type="none">
                {toDoList.map((Todolist)=>
                <li>{Todolist.title}</li> )}
              </ul>
            </div>
            <div className="center_div">
              <br />
              <h1 class="header"> In Progress</h1>
              <br />

              <ul type="none">
                  {inProgress.map((Todolist)=>
                <li>{Todolist.title}</li>)}
              
              </ul>
            </div>
            <div className="center_div">
              <br />
              <h1 class="header"> Done</h1>
              <br />

              <ul type="none">
                  {done.map((Todolist)=>
                <li>{Todolist.title}</li>)}
              
               
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListView;
