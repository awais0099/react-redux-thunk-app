import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    console.log('delete');
    doRemoveUser(user);
  };

  console.log(error);

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <button onClick={handleClick}>
          <GoTrashcan />
        </button>
        {error && 'Error deleting user...'}
        {user.name}
      </div>
    </div>
  );
}

export default UsersListItem;
