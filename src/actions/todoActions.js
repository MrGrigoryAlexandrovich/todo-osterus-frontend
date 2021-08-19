import { GET_TODOS, NEW_TODO } from "./types"

const url = 'https://stark-ridge-95612.herokuapp.com/routes/'
//const url = "http://localhost:4000/routes/"

export const getTodos = () => dispatch => {
    fetch(url+'getall')
      .then(res => res.json())
      .then(todos =>
        dispatch({
          type: GET_TODOS,
          payload: todos
        })
      );
  };

  export const createTodo = (todoData) => dispatch => {
    fetch(url+'create', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(todoData)
    })
      .then(res => res.json())
      .then(todo =>
        dispatch({
          type: NEW_TODO,
          payload: todo
        })
      );
  };