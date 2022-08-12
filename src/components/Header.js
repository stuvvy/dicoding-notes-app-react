import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Header = () => {
	return (
		<Navbar bg="light" sticky="top">
			<Container>
				<Navbar.Brand id="app-name">Notes App</Navbar.Brand>
				<Navbar.Text>by Hendie Jason</Navbar.Text>
			</Container>
		</Navbar>
	);
};

export default Header;
