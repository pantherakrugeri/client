import React from 'react';
import Ability from './components/Ability';
import { Typography, withStyles } from '@material-ui/core';
import Axios from 'axios';

let abilityData = [
	{
		abilityName: 'Strength',
		abilityId: 'strength-id',
		abilityType: 'number',
		abilityValue: 0,
	},
	{
		abilityName: 'Dexterity',
		abilityId: 'dexterity-id',
		abilityType: 'number',
		abilityValue: 0,
	},
	{
		abilityName: 'Constitution',
		abilityId: 'constitution-id',
		abilityType: 'number',
		abilityValue: 0,
	},
	{
		abilityName: 'Intelligence',
		abilityId: 'intelligence-id',
		abilityType: 'number',
		abilityValue: 0,
	},
	{
		abilityName: 'Wisdom',
		abilityId: 'wisdom-id',
		abilityType: 'number',
		abilityValue: 0,
	},
	{
		abilityName: 'Charisma',
		abilityId: 'charisma-id',
		abilityType: 'number',
		abilityValue: 0,
	},
];

const styles = (theme) => ({
	root: {
		padding: 25,
	},
	heading: {
		fontWeight: 'bolder',
	},
});

class Abilities extends React.Component {
	state = {};

	componentDidMount() {
		this.getAbilities();
		let persistedAbilities = localStorage.getItem('abilities');

		if (persistedAbilities === null) {
			abilityData.map(({ abilityName, ...Args }, index) =>
				this.setState({ [abilityName]: 0 })
			);
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		//let persistedAbilities = localStorage.getItem('abilities');
		//localStorage.setItem('abilities', JSON.stringify(this.state));
	}

	getAbilities() {
		let abilityData = [];
		Axios.get('http://localhost:3000/api/abilities')
			.then(function (response) {
				// handle success
				console.log(response);

				abilityData = response.data.data.map(
					({ abilityName, abilityId, ...Args }, index) => (
						<li key={abilityId}>
							<Ability
								//print
								abilityName={abilityName}
								abilityValue={0}
								inputProps={{ min: 0 }}
								abilityType={Args.abilityType}
								onChange={(e) =>
									this.onAbilityChange(abilityName, e.target.value)
								}
							/>
						</li>
					)
				);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				return abilityData;
			});
	}

	onAbilityChange(ability, val) {
		console.log('onAbilityChange was called');
		this.setState({ [ability]: val });
	}

	abilityList = abilityData.map(
		({ abilityName, abilityId, abilityValue, ...Args }, index) => (
			<li key={abilityId + index}>
				<Ability
					//print
					abilityName={abilityName}
					abilityValue={this.state.abilityValue}
					inputProps={{ min: 0 }}
					abilityType={Args.abilityType}
					onChange={(e) => this.onAbilityChange(abilityName, e.target.value)}
				/>
			</li>
		)
	);

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Typography variant='h6' color='secondary' className={classes.heading}>
					{this.props.title}
				</Typography>
				<ul style={{ listStyleType: 'none' }}>{this.abilityList}</ul>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Abilities);
