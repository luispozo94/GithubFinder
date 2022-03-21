//action: takes a string and also can take a payload
//state => dynamic data
const GitHubReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload,//updating the state with the new payload
        loading: false,//updating the loading state to false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,//updating the loading state to true
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],//clearing the users from the state
      }
		default:
			return state; //if no action is passed, return the state
	}
};

export default GitHubReducer;
