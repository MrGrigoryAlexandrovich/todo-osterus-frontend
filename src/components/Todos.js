import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTodos, deleteTodo, changeStatus } from "../actions/todoActions";
import { todosSelector, todoSelector } from "../selectors/selectors";

import "../css/todos.css";

class Todos extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
  delete(id) {
    this.props.deleteTodo(id);
  }
  updateStatus(id) {
    this.props.changeStatus(id);
  }
  updateTodoSelector(name, description) {
    this.props.todo.name = name;
    this.props.todo.description = description;
  }
  render() {
    return (
      <div className="Todos">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Checklist_Noun_project_5166.png/983px-Checklist_Noun_project_5166.png"
          className="card-img-top mx-auto d-block"
          alt="mainimage"
          style={{ width: "80px" }}
        />
        <Link to="/todos/create">
          <button className="btn btn-primary mx-auto d-block" id="addTodo">
            Add new
          </button>
        </Link>
        <span className="text-light" id="todotitle">
          To Do List
        </span>
        <hr></hr>
        {this.props.todos.length > 0 ? (
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
              {this.props.todos.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                  {item.status === "open" ? (
                    <>
                      <td>
                        <button  onClick={() => this.delete(item.id)} className="btn text-danger">Delete</button>
                        <Link
                          to={"todos/edit/" + item.id}
                          onClick={() =>
                            this.updateTodoSelector(item.name, item.description)
                          }
                        >
                          <button className="btn text-info">Edit</button>
                        </Link>
                        <button
                          className="btn text-success"
                          onClick={() => this.updateStatus(item.id)}
                        >
                          Done
                        </button>

                      </td>
                    </>
                  ) : (
                    <>
                      <td>
                        <button className="btn text-danger disabled">
                          Delete
                        </button>
                        <button className="btn text-info disabled">Edit</button>
                        <button
                          className="btn text-warning"
                          onClick={() => this.updateStatus(item.id)}
                        >
                          Undo
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </thead>
            <tbody></tbody>
          </table>
        ) : (
          <div className="container">
            <h3 className="alert alert-danger text-center">
              To Do List is empty, add New To Do
            </h3>
          </div>
        )}
      </div>
    );
  }
}
Todos.propTypes = {
  getTodos: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  todos: todosSelector(state),
  todo: todoSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus: (id) => {
      dispatch(changeStatus(id));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
  };
};
export default connect(
  mapStateToProps,
  { getTodos, deleteTodo, changeStatus },
  null,
  mapDispatchToProps
)(Todos);
