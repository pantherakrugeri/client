import React, { useState, useEffect } from 'react';
import Ability from './Ability';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../layout/Spinner';
import { withStyles } from '@material-ui/core';
import Axios from 'axios';
import Overlay from '../../layout/Overlay';

const styles = (theme) => ({
	root: {
		padding: 25,
	},
	heading: {
		fontWeight: 'bolder',
	},
});

const Abilities = (props) => {
	const [abilitiesConfig, setAbilitiesConfig] = useState([]);
	const [abilities, setAbilities] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getAbilitiesConfig();
	}, []);

	useEffect(() => {
		setInitialAbilities();
	}, [abilitiesConfig]);

	const getAbilitiesConfig = async () => {
		try {
			setLoading(true);
			const res = await Axios.get('http://localhost:3000/api/abilities?gamesystem=pathfinder');
			setAbilitiesConfig(res.data.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const setInitialAbilities = () => {
		abilitiesConfig.forEach(function callbackFn(element, index) {
			const abilityStateName = element.abilityName.toLowerCase();
			abilities[abilityStateName] = '';
		}, this);
	};

	const onAbilityChange = (e) => {
		const { name, value } = e.target;

		setAbilities({
			...abilities,
			[name]: value,
		});
	};

	const abilityFields = abilitiesConfig.map(
		({ abilityName, abilityId, ...Args }) => (
			<li key={abilityId}>
				<Ability
					abilityId={abilityId.toString()}
					abilityName={abilityName}
					abilityType={Args.abilityType}
					abilityValue={abilities[abilityName]}
					inputProps={{ min: 0 }}
					onChange={onAbilityChange}
				/>
			</li>
		)
	);

	const { classes } = props;

	if (loading) {
		return (
			<div>
				<Overlay />
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
				<h3>{props.title}</h3>
				<ul style={{ listStyleType: 'none' }}>{abilityFields}</ul>
			</div>
		);
	}
};

export default withStyles(styles, { withTheme: true })(Abilities);
