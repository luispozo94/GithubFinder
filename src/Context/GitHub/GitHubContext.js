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
    user: {},
    loading: false,
  }
//destructure the state by passing the initial state and dispatch from the reducer
  const [state, dispatch] = useReducer(GitHubReducer, initialState)

  //created a func to get search results
  const searchUsers = async (text) => {
    setLoadingState()
    const params = new URLSearchParams({
      q: text,
    })

		const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
    const { items } = await response.json()//destructuring the items from the response
		//dispatch the action to the reducer,this will update the state
		dispatch({ type: 'FETCH_USERS', payload: items });
  };
  
//Get a single user
  const getUser = async (login) => {
		setLoadingState();
		
		const response = await fetch(`${GITHUB_URL}/users/${login}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
    });
    if (response.status === 404) {
      window.location = '/notfound'
    } else {
			const data = await response.json();
			//dispatch the action to the reducer,this will update the state
			dispatch({ type: 'FETCH_USER', payload: data });
		}
  };
  
  //Clear users from state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });
  //Set loading state to true
  const setLoadingState = () => dispatch({ type: 'SET_LOADING' });
  
  //returns the CONTEXT as a PROVIDER which takes the value or the state you want to pass by also passing the children
  return <GitHubContext.Provider  value={{users:state.users, loading:state.loading, user:state.user, searchUsers, clearUsers, getUser}}>
  {children}
  </GitHubContext.Provider>
}

export default GitHubContext