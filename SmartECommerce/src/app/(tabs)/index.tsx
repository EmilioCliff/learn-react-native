import { StyleSheet, View } from 'react-native';
import AppSafeView from '@/src/components/AppSafeView';
import { useSession } from '@/src/context/AuthContext';
import HomeHeader from '@/src/components/HomeHeader';
import ProductCard from '@/src/components/ProductCard';
import { FlashList } from '@shopify/flash-list';
import { products } from '@/src/data/products';
import { useDispatch } from 'react-redux';
import { addItem } from '@/src/store/reducers/cartSlice';
// import { Button } from '@/src/components/ui/button';
// import { Text } from '@/src/components/ui/text';

const colNum = 2;
const gap = 8;

export default function HomeScreen() {
	const dispatch = useDispatch();
	// const { signOut } = useSession();

	return (
		<AppSafeView>
			<HomeHeader />
			{/* <Button onPress={signOut}>
				<Text>Sign Out</Text>
			</Button> */}
			<FlashList
				numColumns={2}
				data={products}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item, index }) => {
					return (
						<View
							style={{
								// flexGrow: 1,
								paddingLeft: index % colNum === 0 ? gap : 0,
								paddingRight: index % 1 === 0 ? gap : 0,
								paddingBottom: index % 1 === 0 ? gap : 0,
								paddingTop: index < colNum ? gap : 0,
							}}
						>
							<ProductCard
								onAddToCartPress={() => dispatch(addItem(item))}
								product={item}
							/>
						</View>
					);
				}}
				estimatedItemSize={225}
			/>
		</AppSafeView>
	);
}

// <AppSafeView>
// 	<Text>Hello</Text>
// 	<View style={styles.titleContainer}>
// 		<Text>Welcome!</Text>
// 	</View>
// 	<View style={styles.stepContainer}>
// 		<Text>Step 1: Try it</Text>
// 		<Text>
// 			Edit <Text>app/(tabs)/index.tsx</Text> to see changes. Press{' '}
// 			<Text>
// 				{Platform.select({
// 					ios: 'cmd + d',
// 					android: 'cmd + m',
// 					web: 'F12',
// 				})}
// 			</Text>{' '}
// 			to open developer tools.
// 		</Text>
// 	</View>
// 	<View style={styles.stepContainer}>
// 		<Text>Step 2: Explore</Text>
// 		<Text>
// 			{`Tap the Explore tab to learn more about what's included in this starter app.`}
// 		</Text>
// 	</View>
// 	<View style={styles.stepContainer}>
// 		<Text>Step 3: Get a fresh start</Text>
// 		<Text>
// 			{`When you're ready, run `}
// 			<Text>npm run reset-project</Text> to get a fresh{' '}
// 			<Text>app</Text> directory. This will move the current{' '}
// 			<Text>app</Text> to <Text>app-example</Text>.
// 		</Text>
// 	</View>
// 	<Button
// 		variant={'destructive'}
// 		onPress={() => {
// 			showMessage({
// 				message: 'My message title',
// 				description: 'My message description',
// 				type: 'default',
// 				backgroundColor: 'purple',
// 			});
// 		}}
// 	>
// 		<Text>Show Message</Text>
// 	</Button>
// 	<Input
// 		placeholder="Write some stuff..."
// 		value={value}
// 		onChangeText={onChangeText}
// 		aria-labelledby="inputLabel"
// 		aria-errormessage="inputError"
// 		keyboardType="numeric"
// 	/>
// 	<Button onPress={() => signOut()}>
// 		<Text>Sign Out</Text>
// 	</Button>
// </AppSafeView>
const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
