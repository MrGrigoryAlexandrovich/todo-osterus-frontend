import { GET_TODOS, NEW_TODO,CHANGE_STATUS, DELETE_TODO } from "../actions/types";

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
    case CHANGE_STATUS: {
      const index = state.items.findIndex(todo => todo.id !==                                                                        action.payload); //finding index of the item
      const newArray = [...state.items]; 
      newArray[index].status = action.payload.status
      return { 
       ...state, 
       items: newArray,
      }
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
