import React, { useEffect, useState } from "react";
import "./UpdateView.css";
import Todo from "../Todo.json";
import ListView from "../Todolist/ListView";

function UpdateView(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const addData = () => {
    if (title !== "" && desc !== "" && status !== "") {
      Todo.push({
        id: Todo.length,
        title: title,
        description: desc,
        status: status,
      });
      setShow(true);
    } else {
      alert("Please Enter all the fields!!");
    }
  };

  const editData = () => {
    if (title !== "" && desc !== "" && status !== "") {
      const index = Todo.findIndex((e) => e.id === editItem.id);
      Todo[index] = { id: editItem.id, title, description: desc, status };
      setShow(true);
    } else {
      alert("Please Enter all the fields");
    }
  };
  useEffect(() => {
    const { edit } = props;
    if (edit) {
      setTitle(edit.title);
      setDesc(edit.description);
      setStatus(edit.status);
      setEditItem(edit);
    }
  }, [props.edit]);

  useEffect(() => {
    console.log(editItem);
  }, [editItem]);

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
                    onChange={(e) => setTitle(e.target.value)}
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
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                  ></textarea>
                </div>
                <div className="control-group">
                  <select
                    name="status"
                    id="status"
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                  >
                    <option value="select">---SELECT---</option>
                    <option value="ToDo">TO DO </option>
                    <option value="In-Progress">IN PROGRESS</option>
                    <option value="Done">DONE</option>
                  </select>
                </div>

                <br />
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
                    onClick={props.edit ? editData : addData}
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
