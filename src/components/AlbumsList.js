import { useFetchAlbumsQuery } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

function AlbumsList({user}) {
	const { data, isLoading, error } = useFetchAlbumsQuery(user.id);
	// const result = useFetchAlbumsQuery(user.id);

	// console.log(result);

	let content;

	if (isLoading) {
		content = <Skeleton items={3} />
	} else if (error) {
		content = <div>Error loading albums...</div>
	} else {
		content = data.map(album => {
			const header = <div>{album.title}</div>
			return (
				<ExpandablePanel key={album.id} header={header}>
					list of photos in the albums
				</ExpandablePanel>
			);
		});
	}

	return (
		<div>
			<div>albums for {user.name}</div>
			<div>{content}</div>
		</div>
	);
}

export default AlbumsList;