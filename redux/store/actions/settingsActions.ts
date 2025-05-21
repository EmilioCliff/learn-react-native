import { UPDATE_USER_ROLE } from '../types';

export const updateUserRole = (role: string) => ({
	type: UPDATE_USER_ROLE,
	payload: role,
});
