import { Stack } from 'expo-router';

export const unstable_settings = {
	initialRouteName: 'index',
};

export default function CartLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					title: 'Cart',
				}}
			/>
			<Stack.Screen
				name="checkout"
				options={{
					headerShown: true,
					title: 'Checkout',
				}}
			/>
		</Stack>
	);
}
