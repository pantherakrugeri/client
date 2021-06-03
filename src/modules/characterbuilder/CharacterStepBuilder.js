import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import GenerateAbilities from './abilities/GenerateAbilities';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	root: {
		fontWeight: 'bold',
	},
	h2: {
		color: '#4682B4',
	},
});

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
				<div styles='margin: 100;'>
					<h2>Place Holder</h2>
				</div>
			);
		}
		return (
			<div className={classes.root}>
				<Stepper alternativeLabel nonLinear activeStep={this.state.step}>
					<Step key='0'>
						<StepLabel>Generate Abilities</StepLabel>
					</Step>
					<Step key='1'>
						<StepLabel>Choose Race</StepLabel>
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
				<Button
					variant='contained'
					color='primary'
					onClick={() => this.handleNext()}
				>
					{this.state.step === this.stepLength ? 'Finish' : 'Next'}
				</Button>
				{stepfeature}
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(CharacterStepBuilder);
