import React, { useReducer } from 'react';
import axios from 'axios';
import CharacterBuilderContext from './characterBuilderContext';
import CharacterBuilderReducer from './characterBuilderReducer';
import { SET_ABILITIES_CONFIG, SET_ABILITIES, SET_LOADING } from '../types';

const CharacterBuilderState = (props) => {
	const initialState = {
		abilitiesConfig: {},
		abilities: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(CharacterBuilderReducer, initialState);

	// Set Abilities Config

	// Set Abilities

	// Set Loading

	// Set Race

	// Set Class (Profession)

	// Set Skills

	return (
		<CharacterBuilderContext.Provider
			value={{
				abilitiesConfig: state.abilitiesConfig,
				abilities: state.abilities,
				loading: state.loading,
			}}
		>
			{props.children}
		</CharacterBuilderContext.Provider>
	);
};

export default CharacterBuilderState;
