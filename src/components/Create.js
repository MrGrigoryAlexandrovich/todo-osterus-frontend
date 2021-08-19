import React from 'react'
import { Link} from "react-router-dom";
import "../css/create.css";

export default function Create() {
    return (
        <div className="Create">
           <h1 className="text-center text-light">Create new To Do</h1> 
           <hr></hr>
           <form className="mx-auto d-block">
  <div class="form-group">
    <label for="name" class="text-light">Name</label>
    <input type="name" class="form-control" id="name"placeholder="Enter name" required/>
  </div>
  <div class="form-group">
    <label for="description" class="text-light">Description</label>
    <input type="text" class="form-control" id="description" placeholder="Description" required/>
  </div>
  <hr></hr>
  <div class="btn-group mx-auto d-block" role="group" aria-label="Basic example">
  <Link to="/"><button type="button" class="btn btn-secondary">Cancel</button></Link>
  <button type="submit" class="btn btn-primary">Add new</button>
</div>
</form>

        </div>
    )
}
