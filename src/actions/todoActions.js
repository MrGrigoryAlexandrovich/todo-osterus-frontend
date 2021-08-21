import axios from "axios";
import { GET_TODOS, NEW_TODO, DELETE_TODO } from "./types"

const url = 'https://stark-ridge-95612.herokuapp.com/routes/'
//const url = "http://localhost:4000/routes/"

export const getTodos = () => dispatch => {
    fetch(`${url}getall`)
      .then(res => res.json())
      .then(todos =>
        dispatch({
          type: GET_TODOS,
          payload: todos
        })
      );
  };

  export const createTodo = (name,description) => dispatch => {
    axios.post(`${url}create`,{
      "name" : name,
      "description" : description,
  })
      .then(todo =>
        dispatch({
          type: NEW_TODO,
          payload: todo
        })
      );
  };

  export const deleteTodo = (id) => dispatch => {
    axios.delete(url+'delete/'+id)
    .then(() => {
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    })
  };