import React, { Component } from 'react'
import "../css/todos.css";
export default class Todos extends Component {
  render() {
    return (
      <div className="Todos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Checklist_Noun_project_5166.png/983px-Checklist_Noun_project_5166.png" class="card-img-top mx-auto d-block" alt="mainimage" style={{width:"80px"}}/>
      <button className="btn btn-primary mx-auto d-block" href="/create">Add new</button>
      <span className="text-light">To Do List</span>
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
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td className="text-danger">Delete</td>
              <td className="text-info">Edit</td>
              <td className="text-success">Done</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
    }
}
