import React from 'react';
import '../layout.scss';
import PropTypes from 'prop-types';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
//import Radium, { Style } from 'radium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Spinner = ({
	spinnerIcon,
	iconSize,
	iconColor,
	iconClasses,
	spin,
	spinnerContainerClasses,
	spinnerText,
	spanClasses,
}) => {
	return (
		<div className={spinnerContainerClasses}>
			<FontAwesomeIcon
				icon={spinnerIcon}
				className={iconClasses}
				size={iconSize}
				spin={spin}
				//style={{ verticalAlign: 'middle' }}
				color={iconColor}
				title={spinnerText}
			/>
			<span className={spanClasses}>{spinnerText}</span>
		</div>
	);
};

Spinner.propTypes = {
	iconClasses: PropTypes.string,
	iconColor: PropTypes.string,
	iconSize: PropTypes.string,
	spinnerIcon: PropTypes.object,
	spin: PropTypes.bool,
	spinnerContainerClasses: PropTypes.string,
	spanClasses: PropTypes.string,
};

Spinner.defaultProps = {
	iconClasses: 'fas',
	iconColor: 'currentColor',
	iconSize: '2x',
	spinnerIcon: faSpinner,
	spin: true,
	spinnerContainerClasses: 'spin-container',
	spanClasses: 'spin-span',
};

export default Spinner;
