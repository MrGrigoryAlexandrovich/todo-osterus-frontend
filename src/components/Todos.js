import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getTodos } from '../actions/todoActions';

import "../css/todos.css";

 class Todos extends Component {
  componentWillMount() {
    this.props.getTodos()
  }
  render() {
    const todoItems = this.props.todos.map(item => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.status}</td>
        {item.status==="open" ? (
             <>
            <td><button class="btn text-danger">Delete</button></td>
            <td><button class="btn text-info">Edit</button></td>
            <td><button class="btn text-success">Done</button></td>
             </>
            ) : (
              <>
                    <td><button class="btn text-danger disabled">Delete</button></td>
            <td><button class="btn text-info disabled">Edit</button></td>
            <td><button class="btn text-warning">Undo</button></td>
               </>
            )}
      </tr>

    ));
    return (
      <div className="Todos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Checklist_Noun_project_5166.png/983px-Checklist_Noun_project_5166.png" className="card-img-top mx-auto d-block" alt="mainimage" style={{width:"80px"}}/>
      <button className="btn btn-primary mx-auto d-block" id="addTodo" shref="/create">Add new</button>
      <span className="text-light" id="todotitle">To Do List</span>
       <hr></hr>
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Delete</th>
              <th scope="col">Edit</th>
              <th scope="col">Done / Undo</th>
            </tr>
            {todoItems}
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
    }
}

const mapStateToProps = state => ({
  todos: state.todos.items
})

export default connect(mapStateToProps, { getTodos })(Todos);