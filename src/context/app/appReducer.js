import { SET_GAMESYSTEM } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_GAMESYSTEM:
			return {
				...state,
				gamesystem: action.payload,
			};
		default:
			return state;
	}
};
