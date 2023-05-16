import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail({ toDos }) {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <div>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("state", state);
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
