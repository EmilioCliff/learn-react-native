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
					title: 'Profile',
				}}
			/>
			<Stack.Screen
				name="orders"
				options={{
					headerShown: true,
					title: 'Orders',
				}}
			/>
			<Stack.Screen
				name="language"
				options={{
					headerShown: true,
					title: 'Language',
				}}
			/>
		</Stack>
	);
}
