import React, { useEffect, useState } from "react";
import "./UpdateView.css";
import Todo from "../Todo.json";
import ListView from "../Todolist/ListView";

function UpdateView(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);

  const addData = () => {
    if (title !== "" && desc !== "" && status !== "") {
      Todo.push({
        id: Todo.length,
        title: title,
        description: desc,
        status: status,
      });
      setShow(true);

      // const createdAt = (props) => {
      //   return new Date().toLocaleString();
      // };
    } else {
      alert("Please Enter all the fields!!");
    }
  };

  const editData = () => {
    if (title !== "" && desc !== "" && status !== "") {
      Todo.filter((e) => e.id === props.edit).map((Todolist) => {
        Todolist.title = title;
        Todolist.description = desc;
        Todolist.status = status;
      });
      setShow(true);
    } else {
      alert("Please Enter all the fields");
    }
  };
  useEffect(() => {
    return props.edit != null
      ? Todo.filter((e) => e.id === props.edit).map((Todolist) => {
          setTitle(Todolist.title);
          setDesc(Todolist.description);
          setStatus(Todolist.status);
        })
      : null;
  });

  const logValue = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    } else {
      setStatus(e.target.value);
    }
  };

  return (
    <div>
      {show ? (
        <ListView />
      ) : (
        <div className="view_details">
          <div className="secondheader">
            <h1> CREATE/UPDATE VIEW </h1>
          </div>

          <div className="view">
            <div className="view-screen">
              <div className="app-title">
                <h1>VIEW DETAILS</h1>
                <br />
              </div>
              <div className="view-form">
                <div className="control-group">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={(e) => logValue(e)}
                    value={title}
                    id="title"
                  />
                </div>
                <div className="control-group">
                  <textarea
                    id="desc"
                    name="desc"
                    rows="4"
                    cols="30"
                    placeholder="description"
                    onChange={(e) => logValue(e)}
                    value={desc}
                  ></textarea>
                </div>
                <div className="control-group">
                  <select
                    name="status"
                    id="status"
                    onChange={(e) => logValue(e)}
                    value={status}
                  >
                    <option value="select">---SELECT---</option>
                    <option value="ToDo">TO DO </option>
                    <option value="In-Progress">IN PROGRESS</option>
                    <option value="Done">DONE</option>
                  </select>
                </div>
                <div className="buttonList">
                  <button
                    className="btn"
                    onClick={() => setShow(true)}
                    id="backbutton"
                  >
                    GO BACK!
                  </button>
                  <button
                    className="btn"
                    id="button"
                    onClick={props.edit != null ? editData : addData}
                  >
                    CREATE/UPDATE VIEW
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default UpdateView;
