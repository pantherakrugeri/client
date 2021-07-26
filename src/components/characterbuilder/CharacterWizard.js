import React, { useLayoutEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import StepConnector from '@material-ui/core/StepConnector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GenerateAbilities from './abilities/GenerateAbilities';
import {
	faDice,
	faUser,
	faUsers,
	faMap,
	faHiking,
	faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import CharacterWizardTemplate from '../layout/CharacterWizardTemplate';

const useStyles = makeStyles((theme) => ({
	root: {
		justifyContent: 'center',
		alignItems: 'center',
		'& .MuiStepLabel-label': {
			color: theme.palette.secondary.color,
			fontWeight: '750',
		},
		'& .MuiStepLabel-active': {
			color: theme.palette.primary.color,
			fontWeight: '750',
		},
		'& .MuiStepLabel-completed': {
			color: 'rgba(223, 215, 215, 0.932)',
			fontWeight: '100',
		},
	},
	button: {
		marginRight: theme.spacing(1),
	},
	buttonAlign: {
		height: '2em',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

const useColorlibStepIconStyles = makeStyles({
	root: {
		backgroundColor: '#ccc',
		zIndex: 1,
		color: '#fff',
		width: 75,
		height: 75,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	active: {
		backgroundImage:
			'linear-gradient(148deg, rgba(255,219,88) 0%, rgba(255,234,88) 50%, rgba(204,204,204) 100%);',
		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
	},
	completed: {
		backgroundImage:
			'linear-gradient(148deg, rgba(255,219,88) 0%, rgba(255,234,88) 50%, rgba(204,204,204) 100%);',
		color: '#000000',
	},
});

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		'& $line': {
			backgroundImage:
				'linear-gradient(148deg, rgba(255,219,88) 0%, rgba(255,234,88) 50%, rgba(204,204,204) 100%);',
		},
	},
	completed: {
		'& $line': {
			backgroundImage:
				'linear-gradient(148deg, rgba(255,219,88) 0%, rgba(255,234,88) 50%, rgba(204,204,204) 100%);',
		},
	},
	line: {
		marginTop: '15px',
		height: 5,
		border: 0,
		backgroundColor: '#CCC',
		borderRadius: 1,
	},
})(StepConnector);

function ColorlibStepIcon({ active, completed, icon }) {
	const classes = useColorlibStepIconStyles();

	const icons = {
		1: <FontAwesomeIcon icon={faDice} size='2x' />,
		2: <FontAwesomeIcon icon={faUser} size='2x' />,
		3: <FontAwesomeIcon icon={faUsers} size='2x' />,
		4: <FontAwesomeIcon icon={faMap} size='2x' />,
		5: <FontAwesomeIcon icon={faHiking} size='2x' />,
		6: <FontAwesomeIcon icon={faUserGraduate} size='2x' />,
	};

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}
		>
			{icons[String(icon)]}
		</div>
	);
}

const CharacterWizard = ({ steps, onStepTitle }) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleStepTitle = () => {
		onStepTitle(steps[activeStep]);
	};

	useLayoutEffect(() => {
		handleStepTitle();
	}, [handleStepTitle]);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const stepFeature = (activeStep) => {
		let feature = null;
		let children = null;

		if (activeStep === 0) {
			children = <GenerateAbilities title='Generate Abilities' />;
		}
		feature = <CharacterWizardTemplate>{children}</CharacterWizardTemplate>;

		return feature;
	};

	return (
		<div className={classes.root}>
			<Stepper
				alternativeLabel
				activeStep={activeStep}
				connector={<ColorlibConnector />}
			>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<div className={classes.buttonAlign}>
				<Button
					disabled={activeStep === 0}
					onClick={handleBack}
					className={classes.button}
				>
					Back
				</Button>
				<Button
					variant='contained'
					color='primary'
					onClick={handleNext}
					className={classes.button}
				>
					{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
				</Button>
			</div>
			{stepFeature(activeStep)}
		</div>
	);
};

CharacterWizard.propTypes = {
	steps: PropTypes.array,
};

export default CharacterWizard;
