import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function ProductsPage() {
	return (
		<View style={styles.container}>
			<Text>Products Page</Text>
			<Link href="/products/1">Product 1</Link>
			<Link href="/products/2">Product 2</Link>
			<Link href="/products/3">Product 3</Link>
			<Link href="/products/4">Product 4</Link>

			<Link href="/products/best-sellers/playstation-5">
				Product BestSeller
			</Link>
			<Link href="/products/deals/black-friday/playstation-5">
				Product BlackFriday
			</Link>
			<Link href="/products/search/playstation-5">Product Search</Link>
			<Link href="/products/recommended/playstation-5/new">
				Product Recommended
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
