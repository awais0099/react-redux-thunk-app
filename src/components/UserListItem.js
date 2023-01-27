import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from '../components/ExpandablePanel.js';
import AlbumsList from './AlbumsList.js'

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    console.log('delete');
    doRemoveUser(user);
  };

  const header = <>
      <button onClick={handleClick}>
          <GoTrashcan />
      </button>
      {error && 'Error deleting user...'}
      {user.name}
  </>

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
