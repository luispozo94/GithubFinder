import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

//importing the createContext
const AlertContext = createContext();

//this is the provider component and will wrap the whole app component
export const AlertProvider = ({ children }) => {
	//declare the initial state
	const initialState = {
		alert: null,
	};
	//set up the reducer and passed in  the reducer and the initial state
	const [state, dispatch] = useReducer(alertReducer, initialState);

	//created a function to dispatch the message and type(error or success) => This runs when user does not input anything
	const setAlert = (msg, type) => {
		dispatch({ type: 'SET_ALERT', payload: { msg, type } });

		//I want the alert to disappear after 3 seconds
		setTimeout(() => dispatch({ type: 'CLEAR_ALERT' }), 3000);
	};

	return (
		<AlertContext.Provider value={{ alert: state.alert, setAlert }}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
