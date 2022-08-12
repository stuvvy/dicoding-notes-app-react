import React from 'react';
import { MdSearch } from 'react-icons/md';
import AddNote from './AddNote';

const AddSearch = ({ handleSearchNote, handleAddNote }) => {
	return (
		<>
			<AddNote handleAddNote={handleAddNote} />

			<h5 className='mb-3'>Search</h5>
			<div className='search'>
				<MdSearch className='search-icons' size='1.3em' />
				<input
					onChange={(event) =>
						handleSearchNote(event.target.value)
					}
					type='text'
					placeholder='Cari judul catatan kamu...'
				/>
			</div>
		</>
	);
};

export default AddSearch;
