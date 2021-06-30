import React from 'react';
//import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import GenerateAbilities from './abilities/GenerateAbilities';
//import StepConnector from '@material-ui/core/StepConnector';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	root: {
		fontWeight: 'bold',
	},
	active: {
		fontWeight: '1000',
		fontSize: '1.5rem',
	},
	circle: {
		width: 8,
		height: 8,
		borderRadius: '50%',
		backgroundColor: 'currentColor',
	},
	h2: {
		color: '#4682B4',
	},
	bold: {
		fontWeight: 'bold',
	},
	label: {
		fontSize: '18px',
	},
});

// const QontoConnector = withStyles({
// 	alternativeLabel: {
// 		top: 10,
// 		left: 'calc(-50% + 16px)',
// 		right: 'calc(50% + 16px)',
// 	},
// 	active: {
// 		'& $line': {
// 			borderColor: '#784af4',
// 		},
// 	},
// 	completed: {
// 		'& $line': {
// 			borderColor: '#784af4',
// 		},
// 	},
// 	line: {
// 		borderColor: '#eaeaf0',
// 		borderTopWidth: 3,
// 		borderRadius: 1,
// 	},
// })(StepConnector);

class CharacterStepBuilder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0,
		};
		this.handleNext = this.handleNext.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
	}
	stepLength = 5;

	handleNext() {
		this.setState({ step: this.state.step + 1 });
		console.log(this.state.step);
	}

	handlePrev() {
		this.setState({ step: this.state.step - 1 });
		console.log(this.state.step);
	}

	render() {
		const { classes } = this.props;
		const step = this.state.step;

		let stepfeature = null;
		if (step === 0) {
			stepfeature = <GenerateAbilities title='Generate Abilities' />;
		} else {
			stepfeature = (
				<div style={{ marginTop: '25px' }}>
					<h3>Place Holder</h3>
				</div>
			);
		}
		return (
			<div className={classes.root}>
				<Stepper
					alternativeLabel
					nonLinear
					activeStep={this.state.step}
					classes={{
						root: classes.root,
						text: classes.text,
					}}
				>
					<Step key='0'>
						<StepLabel
							classes={{
								root: classes.root,
								label: classes.label,
							}}
						>
							Generate Abilities
						</StepLabel>
					</Step>
					<Step key='1'>
						<StepLabel
							classes={{
								root: classes.root,
								label: classes.label,
							}}
						>
							Choose Race
						</StepLabel>
					</Step>
					<Step key='2'>
						<StepLabel>Choose Class</StepLabel>
					</Step>
					<Step key='3'>
						<StepLabel>Pick Skills</StepLabel>
					</Step>
					<Step key='4'>
						<StepLabel>Buy Equipment</StepLabel>
					</Step>
					<Step key='5'>
						<StepLabel>Finish Details</StepLabel>
					</Step>
				</Stepper>
				<Button
					onClick={() => this.handlePrev()}
					disabled={this.state.step === 0 ? true : false}
				>
					Back
				</Button>
				<Button variant='contained' onClick={() => this.handleNext()}>
					{this.state.step === this.stepLength ? 'Finish' : 'Next'}
				</Button>
				{stepfeature}
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(CharacterStepBuilder);
