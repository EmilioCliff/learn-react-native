import { View } from 'react-native';
import { Text } from './ui/text';
import Entypo from '@expo/vector-icons/Entypo';
import { Button } from './ui/button';
import { router } from 'expo-router';
import { useColorScheme } from '../hooks/useColorScheme';
import { s } from 'react-native-size-matters';

export default function EmptyCart() {
	const { isDarkColorScheme } = useColorScheme();

	return (
		<View className="flex-1 justify-center items-center gap-2">
			<Entypo
				name="shopping-bag"
				// size={50}
				size={s(80)}
				color={isDarkColorScheme ? 'white' : 'black'}
			/>
			<Text className="font-bold mt-4 text-3xl">Your Cart is Empty</Text>
			<Text className="text-md mb-6 text-muted-foreground text-center w-[60%]">
				Browse our products and find something you like
			</Text>
			<Button
				onPress={() => router.replace('/(tabs)')}
				className="rounded-full w-[80%]"
			>
				<Text>Start Shopping</Text>
			</Button>
		</View>
	);
}
