import React, { useEffect, useState } from "react";
import "./ListView.css";
import UpdateView from "../UpdateView/UpdateView";
import Todo from "../Todo.json";

function ListView() {
  const [show, setShow] = useState(false);
  const [toDoList, setToDoList] = useState([]);
  const [inProgress, setinProgress] = useState([]);
  const [done, setdone] = useState([]);
  const [EditId, setEditId] = useState(null);

  useEffect(() => {
    const Todolist = Todo.filter((e) => e.status === "ToDo");
    setToDoList(Todolist);
    const inProgress = Todo.filter((e) => e.status === "In-Progress");
    setinProgress(inProgress);
    const done = Todo.filter((e) => e.status === "Done");
    setdone(done);
  }, []);

  function removeItem(index) {
    done.splice(index, 1);
    setdone([...done]);
  }
  const editItem = (e) => {
    setEditId(e);
    setShow(!show);
  };
  const toDoItem = toDoList?.map((ele) => (
    <li>
      {ele.title}
      <br />
      <i className="fas fa-edit fas_space" onClick={() => editItem(ele)} />
    </li>
  ));

  const inProgressItem = inProgress.map((ele) => (
    <li>
      {ele.title}
      <br />
      <i className="fas fa-edit fas_space" onClick={() => editItem(ele)} />
    </li>
  ));

  return (
    <div>
      {show ? (
        <UpdateView edit={EditId} />
      ) : (
        <div className="main_animation">
          <div className="header">
            <img src="logo2.png" alt="" height="50px" />
            &nbsp;&nbsp;
            <h1>TO DO LIST</h1>
          </div>
          <div className="btnCreate">
            <button onClick={() => setShow(!show)}>CREATE </button>
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
              <ul type="none">{inProgressItem}</ul>
            </div>
            <div className="center_div">
              <br />
              <h1 className="header"> Done</h1>
              <br />

              <ul type="none">
                {done.map((ele, index) => (
                  <li key={index}>
                    {ele.title}
                    <i
                      className="fas fa-trash fas_space"
                      onClick={() => removeItem(index)}
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
