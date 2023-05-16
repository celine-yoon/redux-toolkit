import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  function onChange(event) {
    setText(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <div>
      <h2>To Do List</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Write your to do here"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
} //mapStateToProps : get current state from store to Home

function mapDispatchToProps(dispatch) {
  //dispatch = store.dispatch(action)
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
