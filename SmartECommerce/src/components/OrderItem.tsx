import { View } from 'react-native';
import { Card, CardContent, CardTitle } from './ui/card';
import { vs } from 'react-native-size-matters';
import { Text } from './ui/text';
import { OrderItemm } from '../types/app';

export default function OrderItem(orderItem: OrderItemm) {
	return (
		<Card className="p-4 mt-6">
			<CardTitle>ORDER DETAILS: </CardTitle>
			<View
				className="h-1 w-full bg-border"
				style={{ marginBlock: vs(2) }}
			/>
			<CardContent>
				<View className="flex flex-row justify-between">
					<Text className="font-bold">
						Total Price: $ {orderItem.orderPrice}
					</Text>
					<Text className="font-bold text-destructive">
						$ {orderItem.totalPrice}
					</Text>
				</View>
				<View className="flex flex-row justify-between">
					<Text className="font-bold">Date: ${orderItem.date}</Text>
					<Text className="font-bold text-destructive">
						${orderItem.date}
					</Text>
				</View>
			</CardContent>
		</Card>
	);
}
