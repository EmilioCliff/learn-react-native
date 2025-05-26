import { Product } from '@/src/types/app';
import { createSlice } from '@reduxjs/toolkit';

interface cartItem extends Product {
	quantity: number;
	sum: number;
}

const initialState = {
	items: [] as cartItem[],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		// addItem to cart
		addItem: (state, action) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id,
			);

			if (existingItem) {
				existingItem.quantity++;
				existingItem.sum += action.payload.price;
			} else {
				state.items.push({
					...action.payload,
					quantity: 1,
					sum: action.payload.price,
				});
			}
		},
		// removeItem from cart
		removeItem: (state, action) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id,
			);

			if (existingItem && existingItem.quantity !== 1) {
				existingItem.quantity--;
				existingItem.sum -= action.payload.price;
			} else {
				state.items = state.items.filter(
					(item) => item.id !== action.payload.id,
				);
			}
		},
		// removeProductFromCart
		removeProductFromCart: (state, action) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload.id,
			);
		},
		// emptyCart
		emptyCart: (state) => {
			state.items = [];
		},
	},
});

export const { addItem, removeItem, removeProductFromCart, emptyCart } =
	cartSlice.actions;

export default cartSlice.reducer;
