import { INCREATE_TOTAL_LIKES, INCREATE_TOTAL_LIKES_BY_AMOUNT } from '../types';

const initialState = {
	totalLikes: 10,
};

export const dataReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case INCREATE_TOTAL_LIKES:
			return { ...state, totalLikes: state.totalLikes + 1 };

		case INCREATE_TOTAL_LIKES_BY_AMOUNT:
			return { ...state, totalLikes: state.totalLikes + action.payload };

		default:
			return state;
	}
};
