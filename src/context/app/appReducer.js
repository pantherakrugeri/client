import { SET_GAMESYSTEM } from '../types';

const appReducer = (state, action) => {
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

export default appReducer;
