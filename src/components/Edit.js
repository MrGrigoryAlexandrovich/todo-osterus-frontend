import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateTodo } from "../actions/todoActions";
import { todoSelector } from "../selectors/selectors";
import "../css/edit.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.todo.name,
      description: this.props.todo.description,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.update = this.update.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  update(
    url = window.location.pathname,
    id = url.substring(url.lastIndexOf("/") + 1)
  ) {
    const todo = {
      name: this.state.name,
      description: this.state.description,
    };
    this.props.updateTodo(id, todo.name, todo.description);
    this.setState({ name: "" });
    this.setState({ description: "" });
    alert("To Do Edited");
  }
  render() {
    return (
      <div className="Edit bg-dark">
        <h1 className="text-center text-info">Edit To Do</h1>
        <hr></hr>
        <form
          className="mx-auto d-block"
          onSubmit={(e) => {
            e.preventDefault();
            this.update();
          }}
        >
          <div className="form-group">
            <label htmlFor="name" className="text-light">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChangeName}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="text-light">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChangeDescription}
            />
          </div>
          <hr></hr>
          <div
            className="btn-group mx-auto d-block"
            role="group"
            aria-label="Basic example"
          >
            <Link to="/">
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </Link>
            <button type="submit" className="btn alert-primary">
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
Edit.propTypes = {
  updateTodo: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  todo: todoSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateTodo: (id, name, description) => {
      dispatch(updateTodo(id, name, description));
    },
  };
};
export default connect(
  mapStateToProps,
  { updateTodo },
  null,
  mapDispatchToProps
)(Edit);
