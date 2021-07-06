import {
	GET_ABILITIES_CONFIG,
	SET_ABILITIES_CONFIG,
	SET_ABILITIES,
	SET_LOADING,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_ABILITIES_CONFIG:
			return {
				...state,
				abilitiesConfig: action.payload,
				loading: false,
			};
		case SET_ABILITIES:
			return {
				...state,
				abilities: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
