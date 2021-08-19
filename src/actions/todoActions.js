import { GET_TODOS, NEW_TODO } from "./types"
import axios from 'axios'
const url = 'https://stark-ridge-95612.herokuapp.com/routes/'
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