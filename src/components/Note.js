import { MdDeleteForever } from 'react-icons/md';
import Card from 'react-bootstrap/Card';

const Note = ({ id, title, body, createdAt, handleDeleteNote }) => {
	return (

		<Card style={{ width: '18rem', margin: '1.5em 0 1em 0' }}>
			<Card.Body>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='2em'
				/>
				<Card.Title>
					{title}
				</Card.Title>
				<Card.Text>
					{createdAt}
				</Card.Text>
				<Card.Text>
					{body}
				</Card.Text>

			</Card.Body>
		</Card>
	);
};

export default Note;
