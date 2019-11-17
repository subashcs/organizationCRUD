import { GET_ORGANIZATIONS_SUCCESS} from '../actions/types'; 

const initialState = {success:false,message:{}};

export default function organizationReducer(state = initialState, action) {

  const  message  = action.payload||[];
  console.log("retrieved inred",message);


  switch (action.type) {
    case GET_ORGANIZATIONS_SUCCESS:
      return { ...state, success: true, message };
    default:
      return {state};
  }
}
