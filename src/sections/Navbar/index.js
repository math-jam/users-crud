import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';

export default function Navbar() {
	return (
		<nav className="navbar">
			<button className="btn-navbar">
				<img alt="Logo" className="logo-navbar" src={Logo} />
			</button>
		</nav>
	)
}