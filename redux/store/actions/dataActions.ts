import { INCREATE_TOTAL_LIKES, INCREATE_TOTAL_LIKES_BY_AMOUNT } from '../types';

export const increaseTotalLikes = () => ({
	type: INCREATE_TOTAL_LIKES,
});

export const increaseTotalLikesByAmount = (payload: number) => ({
	type: INCREATE_TOTAL_LIKES_BY_AMOUNT,
	payload: payload,
});
