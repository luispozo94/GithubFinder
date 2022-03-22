
const AlertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,//always keep the old state
        alert: action.payload,//update the state with the payload
      }
    case 'CLEAR_ALERT':
      return {
				...state, //always keep the old state
				alert: null, //update the state with the payload
			};
    default:// else if no cases match return the old state
      return state;
  }
  
}
export default AlertReducer