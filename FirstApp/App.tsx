import {
	StyleSheet,
	Text,
	Image,
	SafeAreaView,
	Alert,
	Button,
	Pressable,
	ScrollView,
	Platform,
	ActivityIndicator,
	View,
} from 'react-native';

export default function App() {
	const onButtonPress = () => {
		Alert.alert('Learing...');
	};
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ActivityIndicator size={'large'} color={'blue'} />
				<Text style={styles.text}>Hello World!</Text>
				<Pressable onPress={onButtonPress}>
					<Image
						style={styles.image2}
						source={{ uri: 'https://picsum.photos/200/300' }}
					/>
				</Pressable>

				<Text style={styles.parag} numberOfLines={3}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
					animi, ipsam at placeat rem{' '}
					<Text
						style={styles.span}
						onPress={() => Alert.alert('Hello!')}
					>
						dolorem!
					</Text>{' '}
					Alias porro, ab asperiores deleniti, labore doloribus unde
					sequi saepe enim dolores libero, nulla at.
				</Text>
				<Button title="Learn More" onPress={onButtonPress} />
				<Text>
					This is an {Platform.OS === 'android' ? 'Android' : 'iOS'}{' '}
					Text
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Platform.OS === 'android' ? 'yellow' : 'white',
	},
	view1: {
		height: 200,
		width: 100,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image2: {
		width: 200,
		height: 200,
		marginInline: 'auto',
		borderRadius: 100,
	},
	text: {
		color: 'blue',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
	span: {
		color: 'blue',
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	parag: {
		marginBlock: 20,
	},
});
