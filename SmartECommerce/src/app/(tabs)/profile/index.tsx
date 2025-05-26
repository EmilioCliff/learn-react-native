import AppSafeView from '@/src/components/AppSafeView';
import HomeHeader from '@/src/components/HomeHeader';
import { Text } from '@/src/components/ui/text';
import { TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { s, vs } from 'react-native-size-matters';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { router } from 'expo-router';
import { ThemeToggle } from '@/src/components/ThemeToggle';
import { Button } from '@/src/components/ui/button';

export default function ProfilePage() {
	const { isDarkColorScheme } = useColorScheme();
	return (
		<AppSafeView>
			<HomeHeader />
			<View className="flex-1 gap-4 p-2">
				<TouchableOpacity
					onPress={() => router.push('/(tabs)/profile/orders')}
					className="flex flex-row justify-between items-center"
				>
					<Text>My Orders</Text>
					<AntDesign
						name="arrowright"
						size={s(18)}
						color={isDarkColorScheme ? 'white' : 'black'}
					/>
				</TouchableOpacity>
				<View
					className="w-full h-1 bg-border"
					style={{ marginBlock: vs(4) }}
				/>
				<TouchableOpacity
					onPress={() => router.push('/(tabs)/profile/language')}
					className="flex flex-row justify-between items-center"
				>
					<Text>Language</Text>
					<AntDesign
						name="arrowright"
						size={s(18)}
						color={isDarkColorScheme ? 'white' : 'black'}
					/>
				</TouchableOpacity>
				<View
					className="w-full h-1 bg-border"
					style={{ marginBlock: vs(4) }}
				/>
				<TouchableOpacity className="flex flex-row justify-between items-center">
					<Text>Logout</Text>
					<AntDesign
						name="arrowright"
						size={s(18)}
						color={isDarkColorScheme ? 'white' : 'black'}
					/>
				</TouchableOpacity>
				<View className="absolute bottom-4 right-8">
					<Button
						size={'icon'}
						variant={'outline'}
						className="justify-center items-center rounded-full p-1"
					>
						<ThemeToggle />
					</Button>
				</View>
			</View>
		</AppSafeView>
	);
}
