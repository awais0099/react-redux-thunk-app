import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store/';
import Skeleton from './Skeleton';
import Button from './Button';

function UsersList() {
	const dispatch = useDispatch();
	const [isLoadingUsers, setIsLoadingUsers] = useState(false);
	const [loadingUsersError, setLoadingUsersError] = useState(false);

	const {data} = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		dispatch(fetchUsers())
		.unwrap()
		.then(() => {

		})
		.catch(() => {

		})
	}, [dispatch]);

	if (isLoadingUsers) {
		return <Skeleton times={6} className="h-10 w-full" />
	}

	if (loadingUsersError) {
		return <div>Error fetching data...</div>
	}

	const handleUserAdd = () => {
		dispatch(addUser());
	}

	const renderedUsers = data.map((user) => {
		return (
			<div key={user.id} className='mb-2 border rounded'>
				<div className='flex p-2 justify-between items-center cursor-pointer'>{user.name}</div>
			</div>
		);
	});

	return (
		<div>
			<div className='flex flex-row justify-between items-center m-3'>
				<h1>Users</h1>
				<Button onClick={handleUserAdd}>+ Add User</Button>
			</div>
			{renderedUsers}
		</div>
	)

}

export default UsersList;
