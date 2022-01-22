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
    const Todolist = Todo.filter((e) => e.status === "ToDo");
    setToDoList(Todolist);
    const inProgress = Todo.filter((e) => e.status === "In-Progress");
    setinProgress(inProgress);
    const done = Todo.filter((e) => e.status === "Done");
    setdone(done);
  }, []);
  
  const deleteItem = (id) => {
    const newItem = done.filter((done) => done.id !== id);
    setdone(newItem);
  };

   const editItem = (e) => {
      console.log(e);
  };
  const toDoItem = toDoList.map((Todolist) => (
    <li>
      {Todolist.title}
      <button type="button" onClick={editItem(Todolist.id)}>
        <i className="fas fa-edit fas_space" />
      </button>
    </li>
  ));

 
  return (
    <div>
      {show ? (
        <UpdateView />
      ) : (
        <div className="main_animation">
          <div className="header">
            <img src="logo2.png" alt="" height="50px" />
            &nbsp;&nbsp;
            <h1>TO DO LIST</h1>
          </div>
          <div className="btnCreate">
            <button onClick={() => setShow(true)}>CREATE </button>
          </div>
          <div className="main_div">
            <div className="center_div">
              <br />
              <h1 className="header"> To Do List</h1>
              <br />
              <ul type="none">{toDoItem}</ul>
            </div>
            <div className="center_div">
              <br />
              <h1 className="header"> In Progress</h1>
              <br />
              <ul type="none">
                {inProgress.map((Todolist) => (
                  <li>
                    {Todolist.title}{" "}
                    <i className="fas fa-edit fas_space" onClick={editItem} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="center_div">
              <br />
              <h1 className="header"> Done</h1>
              <br />

              <ul type="none">
                {done.map((Todolist) => (
                  <li>
                    {Todolist.title}{" "}
                    <i
                      className="fas fa-trash fas_space"
                      onClick={deleteItem}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListView;
