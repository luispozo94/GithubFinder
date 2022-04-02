import { createContext, useReducer } from 'react';
import GitHubReducer from './GitHubReducer';

//assign the context to a variable
const GitHubContext = createContext();

//export the PROVIDER => will wrap App component
export const GitHubProvider = ({ children }) => {
	//declare the initial state of users and a loading spinner
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};
	
	//destructure the state by passing the initial state and dispatch from the reducer
	const [state, dispatch] = useReducer(GitHubReducer, initialState);

	//returns the CONTEXT as a PROVIDER which takes the value or the state you want to pass by also passing the children
	return <GitHubContext.Provider value={{ ...state, dispatch }}>{children}</GitHubContext.Provider>;
};

export default GitHubContext;
