import React, { useState, useEffect, useContext } from 'react';
import Ability from './Ability';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../layout/Spinner';
import { withStyles } from '@material-ui/core';
import Axios from 'axios';
import Overlay from '../../layout/Overlay';
import AppContext from '../../../context/app/appContext';

const styles = (theme) => ({
	root: {
		//padding: 25,
	},
	heading: {
		fontWeight: 'bolder',
	},
	label: {
		fontWeight: 'bold',
	},
});

const Abilities = (props) => {
	const appContext = useContext(AppContext);
	const [abilitiesConfig, setAbilitiesConfig] = useState([]);
	const [abilities, setAbilities] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getAbilitiesConfig();
	}, [appContext.gamesystem]);

	useEffect(() => {
		setInitialAbilities();
	}, [abilitiesConfig]);

	const getAbilitiesConfig = async () => {
		try {
			setLoading(true);
			const res = await Axios.get(
				`http://localhost:3000/api/abilities?gamesystem=${appContext.gamesystem}`
			);
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

	const onDragOver = (e) => {
		e.preventDefault();
		e.target.style.backgroundColor = 'rgba(252,252,252, 0.8)';
	};

	const onDragLeave = (e) => {
		e.preventDefault();
		e.target.style.backgroundColor = '';
	};

	const onDrop = (e) => {
		const { name, id } = e.target;
		e.preventDefault();

		let data = e.dataTransfer.getData('text');
		e.target.appendChild(document.getElementById(data));
		document.getElementById(id).value = e.target.firstChild.innerText;
		e.target.style.border = null;

		setAbilities({
			...abilities,
			[name]: e.target.lastChild.innerText,
		});
	};

	const abilityFields = abilitiesConfig.map(
		({ abilityName, abilityId, ...Args }) => (
			<li key={abilityId}>
				<Ability
					id={abilityName + '-' + abilityId.toString()}
					abilityId={abilityId.toString()}
					abilityName={abilityName}
					abilityType={Args.abilityType}
					abilityValue={abilities[abilityName.toLowerCase()]}
					inputProps={{
						min: 0,
						onDrop: onDrop,
						onDragOver: onDragOver,
						onDragLeave: onDragLeave,
					}}
					InputLabelProps={{
						classes: {
							root: styles.label,
						},
					}}
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
