import OrderItem from '@/src/components/OrderItem';
import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';

const orders = [
	{
		id: 1,
		orderPrice: 120.5,
		totalPrice: 150,
		date: '2025-01-01',
	},
	{
		id: 2,
		orderPrice: 90,
		totalPrice: 75,
		date: '2025-01-02',
	},
	{
		id: 3,
		orderPrice: 250,
		totalPrice: 200.25,
		date: '2025-01-03',
	},
];

export default function OrdersPage() {
	return (
		<View className="flex-1 mx-2">
			<FlashList
				data={orders}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <OrderItem {...item} />}
				estimatedItemSize={225}
			/>
		</View>
	);
}
