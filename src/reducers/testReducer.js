import { DISPLAY_MESSAGE } from '../actions/types';

let initialState = [];
export default function testReducer(state = initialState, action) {
  const data = action.payload;
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return { ...state, data };
    default:
      return state;
  }
}
