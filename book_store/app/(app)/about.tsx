import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function AboutPage() {
	return (
		<View style={styles.container}>
			<Text>About Page</Text>
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
