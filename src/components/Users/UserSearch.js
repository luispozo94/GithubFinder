import React, { useState, useContext } from 'react';
import GitHubContext from '../../Context/GitHub/GitHubContext';
import AlertContext from '../../Context/Alert/AlertContext';
import { searchUsers } from '../../Context/GitHub/GitHubActions';

//UserSearch func is fetching the users from the API 
const UserSearch = () => {
	const [text, setText] = useState('');

	//accessing the context
	const { users, dispatch } = useContext(GitHubContext);

	const { setAlert } = useContext(AlertContext); //accessing the context

	const handleChange = (e) => setText(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		//simple validation
		if (text === '') {
			setAlert('Please, enter something to search', 'error');
		} else {
			dispatch({ type: 'SET_LOADING' });//dispatching from the component to the reducer
			const users = await searchUsers(text);
			dispatch({ type: 'FETCH_USERS', payload: users });
			setText('');
		}
	};

	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
			<div>
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<div className="relative">
							<input
								type="text"
								className="w-full pr-40 bg-gray-200 input input-lg text-black"
								placeholder="Search"
								value={text}
								onChange={handleChange}
							/>
							<button
								type="submit"
								className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button onClick={() => dispatch({type:'CLEAR_USERS'})} className="btn btn-ghost btn-lg">
						Clear
					</button>
				</div>
			)}
		</div>
	);
};

export default UserSearch;
