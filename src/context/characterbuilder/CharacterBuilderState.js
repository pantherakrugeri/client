import React, { useReducer } from 'react';
import Axios from 'axios';
import CharacterBuilderContext from './characterBuilderContext';
import CharacterBuilderReducer from './characterBuilderReducer';
import {
	GET_ABILITIES_CONFIG,
	SET_ABILITIES_CONFIG,
	SET_ABILITIES,
	SET_LOADING,
} from '../types';

const CharacterBuilderState = (props) => {
	const initialState = {
		abilitiesConfig: {},
		abilities: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(CharacterBuilderReducer, initialState);

	// Get Abilities Config
	const setAbilitiesConfig = () => {
		try {
			setLoading();

			async function setAbilities() {
				const res = await Axios.get('http://localhost:3000/api/abilities?gamesystem=pathfinder');

				setInitialAbilities(res.data.data);

				dispatch({
					type: SET_ABILITIES_CONFIG,
					payload: res.data.data,
				});
			}

			setAbilities();
		} catch (error) {
			console.log(error);
		} finally {
		}
	};

	// Set Abilities Config
	const setInitialAbilities = (ac) => {
		let abilities = {};

		ac.forEach(function callbackFn(element, index) {
			const abilityStateName = element.abilityName.toLowerCase();
			abilities[abilityStateName] = '';
		}, this);

		dispatch({
			type: SET_ABILITIES,
			payload: abilities,
		});
	};

	// Set Abilities

	// Set Loading

	// Set Race

	// Set Class (Profession)

	// Set Skills

	// Set loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<CharacterBuilderContext.Provider
			value={{
				abilitiesConfig: state.abilitiesConfig,
				abilities: state.abilities,
				loading: state.loading,
				setAbilitiesConfig,
				setInitialAbilities,
			}}
		>
			{props.children}
		</CharacterBuilderContext.Provider>
	);
};

export default CharacterBuilderState;
