import axios from "axios";
import { GET_TODOS, NEW_TODO, CHANGE_STATUS, DELETE_TODO } from "./types";

const url = "https://stark-ridge-95612.herokuapp.com/routes/";
//const url = "http://localhost:4000/routes/"

export const getTodos = () => (dispatch) => {
  axios.get(`${url}getall`).then((todos) =>
    dispatch({
      type: GET_TODOS,
      payload: todos.data,
    })
  );
};

export const createTodo = (name, description) => (dispatch) => {
  axios
    .post(`${url}create`, {
      name: name,
      description: description,
    })
    .then((todo) =>
      dispatch({
        type: NEW_TODO,
        payload: todo,
      })
    );
};

export const changeStatus = (id) => (dispatch) => {
  axios.put(url + "updatestatus/" + id).then((data) => {
    dispatch({
      type: CHANGE_STATUS,
      payload: { id: id, status: data.data.status },
    });
  });
};
export const deleteTodo = (id) => (dispatch) => {
  axios.delete(url + "delete/" + id).then(() => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  });
};
