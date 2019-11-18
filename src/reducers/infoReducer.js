import {GET_FAILURE, ADD_FAILURE,CLEAR_ERROR,ADD_SUCCESS} from '../actions/types'; 
const initialState = [];

export default function infoReducer(state = initialState, action) {
  const  message  = action.payload;

  switch (action.type) {
    case GET_FAILURE:
      return { ...state, message };
    case ADD_FAILURE:
      return {...state,message}  
    case CLEAR_ERROR:
      return state; 
    case ADD_SUCCESS:
      return {...state,message}  
    default:
      return state;
  }
  
}
