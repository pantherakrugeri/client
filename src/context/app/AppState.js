import React, { useReducer } from 'react';
import AppContext from './appContext';
import AppReducer from './appReducer';
import { SET_GAMESYSTEM } from '../types';

const AppState = (props) => {
	const initialState = {
		gamesystem: 'pathfinder',
	};

	const [state, dispatch] = useReducer(AppReducer, initialState);

	const setGameSystem = (gamesystem) => {
		console.log(gamesystem);
		dispatch({
			type: SET_GAMESYSTEM,
			payload: gamesystem.toLowerCase(),
		});
	};

	return (
		<AppContext.Provider
			value={{
				gamesystem: state.gamesystem,
				setGameSystem,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppState;
