import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddNote = ({ handleAddNote }) => {
	const [noteTitle, setNoteTitle] = useState('');
	const [noteBody, setNoteBody] = useState('');
	const titleCharacterLimit = 50;
	const bodyCharacterLimit = 500;

	const handleChangeTitle = (event) => {
		if (titleCharacterLimit - event.target.value.length >= 0) {
			setNoteTitle(event.target.value);
		}
	};

	const handleChangeBody = (event) => {
		if (bodyCharacterLimit - event.target.value.length >= 0) {
			setNoteBody(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteTitle.trim().length > 0) {
			handleAddNote(noteTitle, noteBody);
			setNoteTitle('');
		}
		if (noteBody.trim().length > 0) {
			handleAddNote(noteTitle, noteBody);
			setNoteBody('');
		}
	};

	return (
		<>
			<Form>
				<Form.Group className="my-4"
					style={{ width: "50%" }}>
					<Form.Label><h5>Judul</h5></Form.Label>
					<Form.Label className='float-right'>Sisa karakter: {titleCharacterLimit - noteTitle.length}</Form.Label>

					<Form.Control
						id="title-content"
						value={noteTitle}
						name='title'
						onChange={handleChangeTitle}
						type="text"
						placeholder="Judul catatan kamu..."
						required
					/>
				</Form.Group>

				<Form.Group className="my-4"
					style={{ width: "50%" }}>
					<Form.Label><h5>Isi</h5></Form.Label>
					<Form.Control
						value={noteBody}
						name='body'
						onChange={handleChangeBody}
						as="textarea"
						rows={5}
						placeholder="Tulis catatanmu disini..."
						required
					/>
				</Form.Group>
			</Form>

			<Button
				style={{ width: '15rem', borderRadius: '16px' }}
				onClick={handleSaveClick}
				className='btn btn-md btn-dark mb-4 buat-catatan'
			>BUAT</Button>
		</>

	);
};

export default AddNote;
