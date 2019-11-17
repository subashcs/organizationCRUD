import { GET_IRRIGATIONGROUPS_SUCCESS} from '../actions/types'; 
const initialState = {success:false,message:[]};

export default function irrigationReducer(state = initialState, action) {

  const  message  = action.payload;

  switch (action.type) {
    case GET_IRRIGATIONGROUPS_SUCCESS:
      return { ...state, success: true, message };
    default:
      return state;
  }
}
