import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Home Page</Text>
			<Link href="/about">To About</Link>
			<Link href="/profile">To Profile</Link>
			<Link href="/products">To Products</Link>
			<Link href="/missing">To Missing</Link>
		</View>
	);
}
