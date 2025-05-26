import { View } from 'react-native';
import { Text } from './ui/text';
import { vs } from 'react-native-size-matters';
import { SHIPPING_FEE, TAX } from '../constants/app';

interface totalViewProps {
	totalItemPrice: number;
	totalOrderPrice: number;
}

export default function TotalsView(props: totalViewProps) {
	return (
		<View style={{ marginBlock: vs(8) }}>
			<View className="flex flex-row justify-between items-center">
				<Text className="font-bold text-lg">Items Price: </Text>
				<Text className="font-bold text-lg">
					$ {props.totalItemPrice}
				</Text>
			</View>
			<View className="flex flex-row justify-between items-center">
				<Text className="font-bold text-lg">Taxes: </Text>
				<Text className="font-bold text-lg">$ {TAX}</Text>
			</View>
			<View className="flex flex-row justify-between items-center">
				<Text className="font-bold text-lg">Shipping Fee: </Text>
				<Text className="font-bold text-lg">$ {SHIPPING_FEE}</Text>
			</View>
			<View
				className="h-1 w-full bg-border"
				style={{ marginBlock: vs(5) }}
			/>
			<View className="flex flex-row justify-between items-center">
				<Text className="font-bold text-lg">Order Total: </Text>
				<Text className="font-bold text-lg">
					$ {props.totalOrderPrice}
				</Text>
			</View>
		</View>
	);
}
