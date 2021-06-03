import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class NavBar extends Component {
	render() {
		return (
			<nav className='navbar bg-primary'>
				<div>
					<FontAwesomeIcon icon={this.props.icon} color='#4682B4' size='3x' />
				</div>

				<h1 className='p-2'>{this.props.title}</h1>
			</nav>
		);
	}
}

export default NavBar;
