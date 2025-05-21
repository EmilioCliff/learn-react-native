import { UPDATE_USER_ROLE } from '../types';

const initialState = {
	userRole: 'admin',
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case UPDATE_USER_ROLE:
			return { ...state, userRole: action.payload };
		default:
			return state;
	}
};
