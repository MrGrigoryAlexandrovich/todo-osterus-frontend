import {
  GET_TODOS,
  NEW_TODO,
  CHANGE_STATUS,
  UPDATE_TODO,
  DELETE_TODO,
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

const mainState =  (state = initialState, action) =>{
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
    case CHANGE_STATUS: {
      const index = state.items.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const newArray = [...state.items];
      newArray[index].status = action.payload.status;
      return {
        ...state,
        items: newArray,
      };
    }
    case UPDATE_TODO: {
      const index = state.items.findIndex(
        (todo) => todo.id !== action.payload.id
      );
      const newArray = [...state.items];
      newArray[index].name = action.payload.name;
      newArray[index].description = action.payload.description;
      return {
        ...state,
        items: newArray,
      };
    }
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

export default mainState;