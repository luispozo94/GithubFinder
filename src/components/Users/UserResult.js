import React, { useEffect, useContext } from 'react';
import Spinner from '../Layout/Spinner';
import UserItem from './UserItem';
import GitHubContext from '../../Context/GitHub/GitHubContext';

const UserResult = () => {
	//using context 
	const { fetchUsers, loading, users } = useContext(GitHubContext);

	useEffect(() => {
		fetchUsers();
	}, []);

	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	} else {
		return <Spinner />;
	}
};

export default UserResult;
