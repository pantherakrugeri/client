import React from 'react';
import Ability from './Ability';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../layout/Spinner';
import { withStyles } from '@material-ui/core';
import Axios from 'axios';

const styles = (theme) => ({
	root: {
		padding: 25,
	},
	heading: {
		fontWeight: 'bolder',
	},
});

class Abilities extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			abilities: this.abilitiesConfig,
			loading: false,
		};
	}

	initialAbilitiesConfig = [];
	abilitiesConfig = {};

	async componentDidMount() {
		try {
			this.setState({ loading: true });
			const res = await Axios.get('http://localhost:3000/api/abilities');
			this.initialAbilitiesConfig = res.data.data;
			this.abilityConfig(res.data);
			this.setInitialAbilitiesState();
		} catch (error) {
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		//console.log(prevState);
		// let persistedAbilities = localStorage.getItem('abilities');
		// localStorage.setItem('abilities', JSON.stringify(this.state));
		// console.log('persistedAbilities: ', JSON.parse(persistedAbilities));
	}

	onAbilityChange = (e) => {
		const { abilities } = { ...this.state }; // manage nested state
		const currentState = abilities;
		const { name, value } = e.target;
		currentState[name] = value;

		this.setState({ abilities: currentState });
	};

	setInitialAbilitiesState = () => {
		this.initialAbilitiesConfig.forEach(function callbackFn(element, index) {
			const abilityStateName = element.abilityName.toLowerCase();
			this.abilitiesConfig[abilityStateName] = '';
		}, this);
	};

	abilityConfig = () =>
		this.initialAbilitiesConfig.map(
			({ abilityName, abilityId, abilityValue, ...Args }) => (
				<li key={abilityId}>
					<Ability
						abilityId={abilityId.toString()}
						abilityName={abilityName}
						abilityValue={this.state.abilities[abilityName.toLowerCase()]}
						inputProps={{ min: 0 }}
						abilityType={Args.abilityType}
						onChange={this.onAbilityChange}
					/>
				</li>
			)
		);

	render() {
		const { classes } = this.props;

		if (this.state.loading) {
			return (
				<div>
					<Spinner
						spinnerIcon={faDiceD20}
						iconSize='3x'
						iconColor='gold'
						iconClasses='fas vm-align'
						spinnerText='Loading...'
						spanClasses='spin-span x-large primeColor'
					/>
				</div>
			);
		} else {
			return (
				<div className={classes.root}>
					<h3>{this.props.title}</h3>
					<ul style={{ listStyleType: 'none' }}>{this.abilityConfig()}</ul>
				</div>
			);
		}
	}
}

export default withStyles(styles, { withTheme: true })(Abilities);
