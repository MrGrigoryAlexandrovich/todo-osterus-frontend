import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTodo } from '../actions/todoActions';
import "../css/create.css";
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.name+ ' ' +this.state.description);
    event.preventDefault();
    const post = {
      name: this.state.name,
      description: this.state.description
    };

    this.props.createTodo(post);
  }
  render() {
    return (
      <div className="Create">
      <h1 className="text-center text-light">Create new To Do</h1> 
      <hr></hr>
      <form className="mx-auto d-block">
<div className="form-group">
<label htmlFor="name" className="text-light">Name</label>
<input type="name" className="form-control" id="name"placeholder="Enter name" value={this.state.name} onChange={this.handleChangeName} required/>
</div>
<div className="form-group">
<label htmlFor="description" className="text-light">Description</label>
<input type="text" className="form-control" id="description" placeholder="Description" value={this.state.description} onChange={this.handleChangeDescription} required/>
</div>
<hr></hr>
<div className="btn-group mx-auto d-block" role="group" aria-label="Basic example">
<Link to="/"><button type="button" className="btn btn-secondary">Cancel</button></Link>
<button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Add new</button>
</div>
</form>

   </div>
    );
  }
}

Create.propTypes = {
  createTodo: PropTypes.func.isRequired
};

export default connect(null, { createTodo })(Create);