import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store/';
import Skeleton from './Skeleton';
import Button from './Button';
import UserListItem from './UserListItem';

import {useThunk} from '../hooks/use-thunk.js';


function UsersList() {
	const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
	const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
	// const dispatch = useDispatch();

	const {data} = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		doFetchUsers();
	}, [doFetchUsers]);

	const handleUserAdd = () => {
		doCreateUser();
	}

	let content;

	if (isLoadingUsers) {
		content = <Skeleton times={6} className="h-10 w-full" />
	} else if (loadingUsersError) {
		content = <div>Error fetching data...</div>
	} else {
		content = data.map((user) => {
		return (
				<UserListItem key={user.id} user={user} />
			);
		});
	}

	return (
		<div>
			<div className='flex flex-row justify-between items-center m-3'>
				<h1>Users</h1>
				<Button onClick={handleUserAdd} loading={isCreatingUser}>+ Add User</Button>
				{creatingUserError && 'Error creating user...'} 
			</div>
			{content}
		</div>
	)

}

export default UsersList;
