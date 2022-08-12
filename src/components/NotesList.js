import Note from './Note';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const NotesList = ({
	notes,
	handleDeleteNote,
}) => {

	const showFormattedDate = (date) => {
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		}
		return new Date(date).toLocaleDateString("id-ID", options)
	}

	return (
		<div className='my-2'>
			<Row xs={1} md={2} lg={3} xl={3} xxl={4} className="g-4">

				{notes.map((note) => (
					<Col>
						<Note
							id={note.id}
							title={note.title}
							body={note.body}
							createdAt={showFormattedDate(note.createdAt)}
							archived={note.archived}
							handleDeleteNote={handleDeleteNote}
						/>
					</Col>
				))}

			</Row>
		</div>
	);
};

export default NotesList;
