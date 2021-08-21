import { GET_TODOS, NEW_TODO, DELETE_TODO } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_TODO:
      return {
        ...state,
        item: action.payload,
      };
    case DELETE_TODO:
     return  {
       ...state,
       items: state.items.filter(todo=>todo.id !== action.payload)
     }
    default:
      return state;
  }
}
