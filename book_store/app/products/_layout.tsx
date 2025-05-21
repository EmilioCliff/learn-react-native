import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';

export default function ProductLayout() {
	return (
		<View style={styles.container}>
			<Slot />
			<Text style={styles.productFooter}>Product Discount</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	productFooter: {
		padding: 20,
		backgroundColor: 'orange',
	},
});
