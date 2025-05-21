import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';

export default function AuthLayout() {
	return (
		<View style={styles.container}>
			<Image
				source={require('../../assets/images/react-logo.png')}
				style={styles.logo}
			/>
			<Slot />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 200,
		height: 200,
	},
});
