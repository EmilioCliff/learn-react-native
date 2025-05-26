export type Product = {
	id: number;
	price: number;
	title: string;
	imageURL: string;
};

export interface OrderItemm {
	id: number;
	orderPrice: number;
	totalPrice: number;
	date: string;
}
