import { createContext , useReducer} from "react"
import GitHubReducer from "./GitHubReducer"

//assign the context to a variable
const GitHubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN 

//export the PROVIDER => will wrap App component
export const GitHubProvider = ({ children }) => {
  //declare the initial state of users and a loading spinner
  const initialState = { 
    users: [],
    loading: true,
  }
//destructure the state by passing the initial state and dispatch from the reducer
  const [state, dispatch] = useReducer(GitHubReducer, initialState)

  const fetchUsers = async () => {
		const response = await fetch(`${GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
		const data = await response.json();
		//dispatch the action to the reducer,this will update the state
		dispatch({ type: 'FETCH_USERS', payload: data });
	};

  //returns the CONTEXT as a PROVIDER which takes the value or the state you want to pass by also passing the children
  return <GitHubContext.Provider  value={{users:state.users,loading:state.loading, fetchUsers}}>
  {children}
  </GitHubContext.Provider>
}

export default GitHubContext