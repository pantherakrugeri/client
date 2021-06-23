import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../layout.scss';

const Spinner = () => {
	return (
		<Fragment>
			<FontAwesomeIcon
				icon={faSpinner}
				className='fa-2x fas fa-spinner fa-spin compColor'
				style={{ verticalAlign: 'middle' }}
				title='Loading...'
			/>
			<span
				className='primeColor'
				style={{ margin: '10px', verticalAlign: 'middle' }}
			>
				Loading...
			</span>
		</Fragment>
	);
};

export default Spinner;
