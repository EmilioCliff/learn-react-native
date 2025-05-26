import { ThemeToggle } from '@/src/components/ThemeToggle';
import { Redirect, Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { useSession } from '@/src/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { vs } from 'react-native-size-matters';

export default function TabLayout() {
	const { session } = useSession();
	return !session ? (
		<Redirect href={'/(auth)/signin'} />
	) : (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: Platform.select({
					android: {
						height: vs(50),
					},
					default: {},
				}),
				tabBarLabelStyle: {
					fontSize: 12,
				},
				headerRight: () => <ThemeToggle />,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="cart"
				options={{
					title: 'Cart',
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons name="cart" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: 'Profile',
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons name="person" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
