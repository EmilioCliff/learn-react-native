import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ForgotPassword() {
	return (
		<View style={styles.container}>
			<Text>forgot-password</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
