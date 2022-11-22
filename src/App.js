import { useState } from "react";
import { connect } from "react-redux";
import { mappropstodispatch, mappropstostate } from "./redux/todo/Map";
import "./Todo.css";
import TodoList from "./TodoList";

function App(props) {
  const [inp, setInp] = useState("");
  const [edtClick, setEdtClick] = useState(false);
  const [edtIndex, setEdtIndex] = useState("");
  const addtask = () => {
    if (inp.trim() !== "") {
      setInp("");
      props.addtodo(inp);
      
    } else {
      alert("Field is empty");
    }
  };

  const editTaskfunc = (e) => {
    props.editTasks(e);
    setEdtIndex(e);
    setEdtClick(true);
    setInp(props.incomplete[e].tasks);
  };
  const checkedfunc = (e, i) => {
    if (e.target.checked) {
      props.completedtask(i);
    }
  };

  const uncheckedfunc = (e, i) => {
    if (e.target.checked) {
    } else {
      props.undotask(i);
    }
  };
  const updatetask = () => {
    if (inp.trim() !== ""){
      setEdtClick(false);
      props.updatetask({ index: edtIndex, tasks: inp });
      setInp("");
      
    } else {
      alert("Field is empty");
    }
  };
  const delete_inc = (e) => {
    props.deleteinctodo(e);
  };
  const delete_comp = (e) => {
    props.deletecomptodo(e);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>TODO LIST</h2>
        <h3>Add Item</h3>
        <p className="both">
          <input
            id="new-task"
            name="newTask"
            type="text"
            value={inp}
            onChange={(e) => {
              setInp(e.target.value);
            }}
          />
          {!edtClick && (
            <button name="addBtn" id="addtodobtn" onClick={addtask}>
              Add
            </button>
          )}

          {edtClick && (
            <button name="addBtn" id="addtodobtn" onClick={updatetask}>
              Update
            </button>
          )}
        </p>
        <h3>Todo</h3>
        <div>
          <h3>Incompleted</h3>
          <div className="picwarn">
            {props.incomplete.length === 0 ? (
              <div className="picwarn2">
              <img
                alt=""
                className="nofound"
                src="https://cdn-icons-png.flaticon.com/512/2995/2995393.png"
              />
              <h2>No task available</h2>
              </div>
            ) : (
              <ul id="incomplete-tasks">
                {props.incomplete.map((i, index) => {
                  return (
                    <TodoList
                      show={true}
                      tufal={false}
                      key={i.index}
                      task={i.tasks}
                      editTask={() => {
                        editTaskfunc(index);
                      }}
                      delTask={() => delete_inc(index)}
                      handleChange={(e) => checkedfunc(e, i.index)}
                    />
                  );
                })}
              </ul>
            )}{" "}
          </div>
          <h3>Completed</h3>
          <div className="picwarn">
            {props.complete.length === 0 ? (
             <div className="picwarn2">
               <img
                alt=""
                className="nofound"
                src="https://cdn-icons-png.flaticon.com/512/2995/2995393.png"
              />
              <h2>No completed task available</h2>
             </div>
            ) : (
              <ul id="completed-tasks">
                {props.complete.map((i, index) => {
                  return (
                    <TodoList
                      show={false}
                      tufal={true}
                      key={i.index}
                      task={i.tasks}
                      delTask={() => {
                        delete_comp(i.index);
                      }}
                      handleChange={(e) => {
                        uncheckedfunc(e, i.index);
                      }}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mappropstostate, mappropstodispatch)(App);
