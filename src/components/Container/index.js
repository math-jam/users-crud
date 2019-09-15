import React from 'react';
import './Container.css';

export default function Container(props) {
	const { children } = props;

	return (
		<>
			<section className="container">{children}</section>
		</>
	)
}

